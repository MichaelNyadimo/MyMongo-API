const controllers = require('../controllers/Item.controller');
const express = require('express');

exports.ItemRoutes = express.Router();
ItemRoutes.get('/', controllers.getAllTaks).post('/', controllers.createTaks);

ItemRoutes
.get('/:ItemId', controllers.getItem)
.post('/:ItemId', controllers.updateItem)
.delete('/:Itemid', controllers.deleteItem);
