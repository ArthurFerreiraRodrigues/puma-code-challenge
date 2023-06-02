const HttpStatus = require('http-status-codes');
const { favoritedProfiles } = require('../model/Profile.class.model');
const profileService = require('../service/profile.service');

/**
 * Receives a Profile object on it's body and adds it to the list of favorited profiles
 */
const addProfile = async (req, res) => {
    await profileService.addProfile(res.locals.retrievedProfile);
    res.status(201).json(res.locals.retrievedProfile);
};

/**
 * Lists all favorited profiles
 */
const listProfiles = async (req, res) => {
    res.status(200).json(favoritedProfiles);
};

/**
 * Toggles the starred status of a profile
 */
const toggleStar = async (req, res) => {
    const { username } = req.params;
    try {
        const starred = await profileService.toggleStar(
            username,
            res.locals.currentlyStarredProfile,
        );
        res.status(200).json(starred);
    } catch (error) {
        res.status(error.status).json({
            error: `${error.status} ${HttpStatus.StatusCodes[error.status]
                .toLowerCase()
                .replace('_', ' ')}`,
            message: error.message,
        });
    }
};

/**
 * Removes a profile from the list of favorited profiles
 */
const deleteProfile = async (req, res) => {
    const { username } = req.params;
    try {
        await profileService.deleteProfile(username);
        res.status(200).json();
    } catch (error) {
        res.status(error.status).json({
            error: `${error.status} ${HttpStatus.StatusCodes[error.status]
                .toLowerCase()
                .replace('_', ' ')}`,
            message: error.message,
        });
    }
};

module.exports = {
    addProfile,
    listProfiles,
    toggleStar,
    deleteProfile,
};
