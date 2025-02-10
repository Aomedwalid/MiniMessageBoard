const express = require('express');
const constroller = require('../controllers/messageController.js')
const routes = express.Router();

//get the messages requiest

routes.get('/' , constroller.showIndex);

// get create message page

routes.get('/create-message' , constroller.showCreateMessage);

//message details

routes.get('/:messageID' , constroller.showDetails)

//post the new message route

routes.post('/create-message' , constroller.postCreateMessage);

//error routes 

routes.get('*' , constroller.showWrongRoute)

//export now this route

module.exports = routes;