const express = require('express');
const path = require('path');
const app = express();
const indexRoute = require('./routes/routesMessages');
require('dotenv').config();

//setting the pathes

const assetsPath = path.join(__dirname, 'public');

//middlewares and the static 

app.use(express.static(assetsPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//now let's set up the ejs engine

app.set('view engine' , 'ejs');

//get requiestes

app.use('/',indexRoute);
//listener

app.listen(process.env.PORT_NUMBER);