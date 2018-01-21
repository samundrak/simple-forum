const api = require('express').Router();
const user = require('../../../controllers/UserController');
const auth = require('../../../controllers/AuthController');

api.get('/profile', auth.me);

/* User api routes */
api.get('/users', user.index);
api.get('/users/:id', user.show);
api.patch('/users/:id', user.update);

///* Food api routes */
//api.get('/foods', food.index);
//api.post('/foods', administratorMiddleware, requestValidator(foodSchema), food.create);
//api.get('/foods/:id', food.show);
//api.delete('/foods/:id',administratorMiddleware, food.destroy);
//api.patch('/foods/:id', administratorMiddleware, requestValidator(foodSchema), food.update);
//
///* Order api routes */
//api.get('/orders', order.index);
//api.post('/orders', requestValidator(orderSchema), order.create);
//api.patch('/orders/:id', requestValidator(orderSchema), order.update);
//api.get('/orders/:id', order.show);
//api.delete('/orders/:id', order.destroy);

module.exports = api;
