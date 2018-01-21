#CanteenMS

#Requirements

* Node.js & NPM v8.4.0
* Mongo 2.2.3
* Maildev

#Install

* Clone this repo
* Run `npm install` to install dependencies
* Run `npm run dep` to run dependencies like mongo and maildev, don't forget to enter root password
  after running command for mongo.
* Run `npm run seed` to seed database on another terminal

#Run

* Copy file `.env.example` to `.env` and change env details if needed
* After doing seed and running dependencies, run `npm start`
* Then visit http://localhost:3000 to access app
