const { Profile } = require('../model/Profile.class.model').default;
const profileService = require('../service/profile.service');
const favoritedProfiles = require('../model/users.model');

const listProfiles = async (req, res, next) => {
    try {
        const savedUsers = favoritedProfiles;
        res.status(200).json(profiles);
    } catch (error) {
        next(error);
    }
};

const addProfile = async (req, res, next) => {
    const { username, name, email, bio } = req.body;
    try {
        const profile = await Profile.create({
            username,
            name,
            email,
            bio,
        });
        res.status(201).json(profile);
    } catch (error) {
        next(error);
    }
};

const toggleStar = async (req, res, next) => {
    const { username } = req.params;
    try {
        const profile = await Profile.findOne({
            where: {
                username,
            },
        });
        profile.isStarred = !profile.isStarred;
        await profile.save();
        res.status(200).json(profile);
    } catch (error) {
        next(error);
    }
};


const deleteProfile = async (req, res) => {
    const { username } = req.params;
    try {
        res.status(200).json({
            message: 'Hello World!' + username,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    listProfiles,
    addProfile,
    toggleStar,
    deleteProfile,
};