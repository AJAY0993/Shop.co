const multer = require('multer')
const AppError = require('../utils/AppError')

const multerStorage = multer.diskStorage({})
const multerFilter = (req, file, cb) => {
  if (file.mimetype.split('/')[0] === 'image') {
    cb(null, true)
  } else {
    cb(new AppError(400, 'Inavlid file format', null))
  }
}

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
})

module.exports = upload
