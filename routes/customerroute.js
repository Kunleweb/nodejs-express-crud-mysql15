const express= require('express')
const router = express.Router();
const routeController = require('./../controllers/routeController')


router
.route('/')
.get(routeController.showCustomers)

router
.route('/add')
.post(routeController.addCustomers)

router
.route('/update/id')
.patch(routeController.updateCustomers)


router
.route('/delete/id')
.delete(routeController.deleteCustomers)


