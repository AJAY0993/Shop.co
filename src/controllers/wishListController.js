const User = require('../models/User')
const catchAsync = require('../utils/catchAsync')

const getWishList = catchAsync(async (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const wishList = await User.findById(req.user._id)
    .select('wishList')
    .populate('wishList')
  res.status(200).json({
    status: 'success,',
    message: 'wishlist fetched successfully',
    data: {
      wishList: wishList.wishList
    }
  })
})

const addToWishList = catchAsync(async (req, res) => {
  const { productId } = req.body
  // eslint-disable-next-line no-underscore-dangle
  await User.findByIdAndUpdate(req.user._id, {
    $addToSet: { wishList: productId }
  })
  res.status(200).json({
    status: 'success,',
    message: 'Prduct added to wishlist successfully'
  })
})

const removeFromWishList = catchAsync(async (req, res) => {
  const { productId } = req.body
  await User.findByIdAndUpdate(
    // eslint-disable-next-line no-underscore-dangle
    req.user._id,
    {
      $pull: { wishList: productId }
    },
    { new: true }
  )
  res.status(204).json({
    status: 'success,',
    message: 'Prduct removed from wishlist successfully'
  })
})

module.exports = { getWishList, addToWishList, removeFromWishList }
