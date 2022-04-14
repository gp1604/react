const express = require('express')
const { register,update, login, getList, remove,getDetail } = require('../controllers/user.controller')
const { createUserValidation, validate } = require('../utils/schemaValidation')
const userRoute = express.Router()


userRoute.get('/', (req, res, next) => {
    getList(req, res, next)
})

userRoute.get('/test-email', (req, res, next) => {
})

userRoute.get('/:id', (req, res, next) => {
    getDetail(req, res, next)

})
// router đăng ký
userRoute.post('/register', validate(createUserValidation), (req, res, next) => {
    register(req, res, next)
})

userRoute.post('/login', (req, res, next) => {
    login(req, res, next)
})

userRoute.put('/:id', (req, res, next) => {
    update(req,res , next)
})

userRoute.delete('/:id', (req, res, next) => {
    remove(req, res, next)
})


module.exports = userRoute