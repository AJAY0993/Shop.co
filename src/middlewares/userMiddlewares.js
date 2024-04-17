const cloudinary = require('../config/cloudinary')
const AppError = require('../utils/AppError')

const handleUpload = async (req, res, next) => {
  try {
    const tempUsername = req.body.username
    const tempEmail = req.body.email
    req.body.username = tempUsername
    req.body.email = tempEmail

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        resource_type: 'auto'
      })
      await cloudinary.uploader.destroy(req.user.cloudinaryId)
      req.body.profilePic = result.secure_url
      req.body.cloudinaryId = result.public_id
    }
    next()
  } catch (err) {
    next(new AppError(500, 'Something went wrong while updating profile pic'))
  }
}

module.exports = { handleUpload }
