const { application } = require('express');
const express= require('express');
const TODO = require('../models/models');
const routes = express.Router();
const homeController = require('../controllers/home_controller');
routes.use(express.urlencoded())

routes.get('/',homeController.home);

routes.post('/add-task',homeController.addTask)

routes.get('/delete-task', homeController.deleteTask);


module.exports=routes;