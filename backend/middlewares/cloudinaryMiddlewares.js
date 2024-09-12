const cloudinary = require('../config/cloudinary')

const uploadOne = (req, res, next) => {
  const result = cloudinary.uploader.upload()
}

module.exports = { uploadOne }
