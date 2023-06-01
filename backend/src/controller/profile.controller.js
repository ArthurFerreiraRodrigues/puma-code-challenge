const { Profile } = require('../model/Profile.class.model').Profile;
const { favoritedProfiles } = require('../model/Profile.class.model');
const profileService = require('../service/profile.service');

/** 
 * Receives a Profile object on it's body and adds it to the list of favorited profiles
*/
const addProfile = async (req, res, next) => {
    try {
        let { username, name, avatar, url } = req.body;

        await profileService.addProfile({
            username,
            name,
            avatar,
            url,
        });

        res.status(200).json(favoritedProfiles);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    addProfile,
};
