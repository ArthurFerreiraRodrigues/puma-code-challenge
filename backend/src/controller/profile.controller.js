const { favoritedProfiles } = require('../model/Profile.class.model');
const profileService = require('../service/profile.service');

/**
 * Receives a Profile object on it's body and adds it to the list of favorited profiles
 */
const addProfile = async (req, res, next) => {
    try {
        await profileService.addProfile(res.locals.retrievedProfile);
        res.status(201).json(favoritedProfiles);
    } catch (error) {
        next(error);
    }
};

/**
 * Lists all favorited profiles
 */
const listProfiles = async (req, res, next) => {
    try {
        res.status(200).json(favoritedProfiles);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    addProfile,
    listProfiles,
};
