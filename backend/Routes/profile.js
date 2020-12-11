const express = require('express');
const config = require('config');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
      destination: (req, file, cb) => {
            cb(null, 'uploads');
      },
      filename: (req, file, cb) => {
            console.log(file);
            cb(null, Date.now() + path.extname(file.originalname));
      }
});
const fileFilter = (req, file, cb) => {
      if (file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
            cb(null, true);
      } else {
            cb(null, false);
      }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });

const isAuth = require('../middleware/passport-setup');

const { getOwner, postProfile, getAllProfiles, getProfileByUserId } = require('../controllers/profile.controller');
const { profileRules, validator } = require('../middleware/validatorProfile')
//get models

//@route GET /profile/owner
//@desc Get current user profile
// @access Private

router.get('/owner', isAuth(), getOwner);
// @route    POST /profile
// @desc     Create or update user profile
// @access   Private

router.post('/', isAuth(), upload.single('image'), profileRules(), validator, postProfile);



// @route    GET /profile
// @desc     Get all profiles
// @access   Public
router.get('/', getAllProfiles);


// @route    GET /profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public


router.get('/user/:user_id', getProfileByUserId)

module.exports = router;