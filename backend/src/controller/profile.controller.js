const { Profile } = require('../model/Profile.class.model').Profile;
const { favoritedProfiles } = require('../model/Profile.class.model');
const profileService = require('../service/profile.service');

const listProfiles = async (req, res, next) => {
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
    listProfiles,
};
