const jwt = require('jsonwebtoken')

const generateAccessToken = (payload = {}, time = '7d') => {
  return jwt.sign(payload, "gphihi", { expiresIn: time })
}

module.exports = {generateAccessToken}