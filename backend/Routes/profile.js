const express = require('express');
const config = require('config');
const router = express.Router();

const isAuth = require('../middleware/passport-setup');

const { getOwner, postProfile, getAllProfiles, getProfileByUserId } = require('../controllers/profile.controller');
const { profileRules, validator } = require('../middleware/validatorProfile')
//get models

//@route GET /profile/owner
//@desc Get current user profile
// @access Private

router.get('/owner', isAuth(), getOwner);
// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private

router.post('/', isAuth(), profileRules(), validator, postProfile);



// @route    GET /profile
// @desc     Get all profiles
// @access   Public
router.get('/', getAllProfiles);


// @route    GET /profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public


router.get('/user/:user_id', getProfileByUserId)

module.exports = router;