/*
 global global
 */
const passport = require("passport");
const passportJWT = require("passport-jwt");
const pick = require('lodash/fp/pick');
const User = require('../server/core/services/User');

const cfg = global.config();
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
  secretOrKey: cfg.auth.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
};

module.exports = () => {
  const strategy = new Strategy(params, (payload, done) => {
    User.find({
      _id: payload._id,
    })
      .then(
        (user) => {
          if (!user.status) {
            return done(null, false);
          }

          const newUser = pick(['email', 'role', 'first_name', 'last_name', 'status', '_id', 'created_at'])(user);
          return done(null, newUser);
        },
        error => done(new Error(error), null),
      );
  });
  passport.use(strategy);
  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate("jwt", cfg.auth.jwt.session),
  };
};
