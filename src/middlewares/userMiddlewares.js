const upload = require('../config/multer')

const handleUpload = (req, res, next) => {
  upload('profilePic')
}
