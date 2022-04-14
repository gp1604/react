const UserModel = require('../models/user.schema')
const { generateAccessToken } = require('../utils/helpers')
const jwt = require('jsonwebtoken')
module.exports = {
  register: async (req, res, next) => {
    try {
      const body = req.body
      const createUser = new UserModel(body)
      
      const isCheck = await UserModel.findOne({ username: body.username })
      if (isCheck) {
        return res.status(400).json({ message: 'tài khoản đã tồn tại' })
      }
      createUser.save().then((data) => {
        console.log(data)
        return res.json(body)
      })
    } catch (error) {
      return res.status(500).json({ message: 'server error' })
    }
  },
  getList: async (req, res, next) => {
    // thêm user vào
    const data = await UserModel.find()
    return res.json(data)
  },
  getDetail: async (req, res, next) => {
    try {
      const { id } = req.params
      const result = await UserModel.findOne({ _id: id })
      return res.json(result)
    } catch (error) {
      return res.status(400).json({ message: 'id not exist' })
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const isUpdate = await UserModel.findOneAndUpdate({ _id: id }, body)
      return res.json({ message: 'update success' })
    } catch (error) {
      return res.status(400).json({ message: 'id not exist' })
    }
  },
  remove: async (req, res, next) => {
    try {
      const { id } = req.params
      const isDelete = await UserModel.deleteOne({ _id: id })
      return res.json({ message: 'delete success' })
    } catch (error) {
      return res.status(400).json({ message: 'id not exist' })
    }
  },
  login: async (req, res, next) => {
    try {
      const { username, password } = req.body
      const isCheck = await UserModel.findOne({ username, password })
      if (!isCheck) {
        return res.status(403).json({ message: 'tài khoản hoặc mật khẩu không đúng' })
      }
      const token = generateAccessToken({
        id: isCheck._id,
        role: isCheck.role
      })
      console.log(isCheck);
      return res.json({
        message: 'đăng nhập thành công',
        token: token,
        name: isCheck.name,
        role: isCheck.role
      })
    } catch (error) {
      return res.status(400).json({ message: 'id not exist' })
    }

  }
}