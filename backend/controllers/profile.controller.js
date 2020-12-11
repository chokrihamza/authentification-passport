const Profile = require('../models/Profile');

// @ controller for owner profile 
// @route    GET profile/owner
// @desc     Get current users profile
// @access   Private



exports.getOwner = async (req, res) => {
      try {
            const profile = await Profile.findOne({
                  user: req.user.id
            }).populate('user');
            if (!profile) {
                  return res.status(400).json({ msg: 'There is no profile for this user' });
            }
            res.json(profile)

      } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
      }

}
// @ controller for posting profiles
// @route    POST /profile
// @desc     Create or update user profile
// @access   Private
exports.postProfile = async (req, res) => {
      console.log(req.file);
      // destructure the request
      const {

            location,
            status,
            farmerDomaine,
            adresse
      } = req.body

      const newprofile = {};

      newprofile.user = req.user.id;
      newprofile.image = req.file.path;
      newprofile.location = location;
      newprofile.status = status;
      newprofile.adresse = adresse;

      // farmerDomaine - Spilt into array
      if (farmerDomaine) {
            newprofile.farmerDomaine = farmerDomaine.split(',').map(skill => skill.trim());
      }

      try {
            //creates new doc if no profile  is found
            let profile = await Profile.findOne({ user: req.user.id });
            if (profile) {
                  //update
                  profile = await Profile.findOneAndUpdate({ user: req.user.id },
                        { $set: newprofile },
                        {
                              useFindAndModify: false,
                              new: true
                        },
                  );
                  return res.json(profile)

            }
            //Create
            profile = new Profile(newprofile);
            await profile.save();
            res.json(profile);


      } catch (err) {
            console.log(err.message);
            return res.status(500).send('Server Error');
      }



}
// @ controller for getting all profiles 
// @route    GET /profile
// @desc     Get all profiles
// @access   Public
exports.getAllProfiles = async (req, res) => {
      try {
            const profiles = await Profile.find().populate('user');
            res.json(profiles);
      } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
      }
}


// @ controller getting profile by user id
// @route    GET /profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public

exports.getProfileByUserId = async (req, res) => {
      try {
            const profile = await Profile.findOne({
                  user: req.params.user_id
            }).populate('user');
            if (!profile) return res.status(400).json({ msg: "profile not found" })
            res.json(profile)

      } catch (err) {
            console.error(err.message);
            if (err.kind == "objectId") {
                  return res.status(400).json({ msg: "Profile not found" });
            }
            return res.status(500).json({ msg: 'Server error' });
      }
}
