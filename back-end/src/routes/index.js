const express = require('express')

const ProductRoute = require('./product.route') 
const CategoriesRoute = require('./categories.route')
const Orders  = require('./orders.route')
const UserRoutes = require('./user.route')
const apiRoute = express.Router()
/**
 *  chia nhỏ route con ra
 * 
 */

 apiRoute.use('/users', UserRoutes)
 apiRoute.use('/categories', CategoriesRoute)
 apiRoute.use('/products', ProductRoute)
 apiRoute.use('/orders', Orders)

 module.exports =  apiRoute