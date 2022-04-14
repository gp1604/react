const express = require('express') ;
const CategoriesRoute = express.Router();
const { create, getList, getDetail, update, remove } = require('../controllers/category.controller')

CategoriesRoute.get('/', (req, res, next) => {
    getList(req, res, next)
})

CategoriesRoute.get('/:id', (req, res, next) => {
    getDetail(req, res, next)
})

CategoriesRoute.post('/', (req, res, next) => {
    create(req, res, next)
})

CategoriesRoute.put('/:id', (req, res, next) => {
    update(req, res, next)
})

CategoriesRoute.delete('/:id', (req, res, next) => {
    remove(req, res, next)
})


module.exports = CategoriesRoute