const HttpStatus = require('http-status-codes');
const { favoritedProfiles } = require('../model/Profile.class.model');
const profileService = require('../service/profile.service');
const { maxProfilesQuantity } = require('../config/environment');

/**
 * Checks if the maximum number of profiles has been reached
 *
 * @param {string} username
 *
 * @throws {HttpStatus.405} if the maximum number of profiles has been reached
 */
const maximumProfiles = async (req, res, next) => {
    if (favoritedProfiles.length >= maxProfilesQuantity) {
        res.status(405).json({
            error: 'Not Allowed',
            message: `Maximum number of profiles reached: {${maxProfilesQuantity}}`,
        });
        return; // return is necessary to stop the execution of the subsequent middleware
    }
    next();
};

/**
 * Checks if the user has already been added, can be done without consulting the github api again
 * because if the user has already been added, it means that it has already been validated
 *
 * @param {string} username
 *
 */
const userAlreadyAdded = async (req, res, next) => {
    const { username } = req.body;

    if (!username) {
        res.status(400).json({
            error: 'bad request',
            message: "Request Body key 'username' is required",
        });
        return; // return is necessary to stop the execution of the subsequent middleware
    }

    if (
        favoritedProfiles.find(
            (favoritedProfile) => favoritedProfile.username === username,
        )
    ) {
        res.status(400).json({
            error: 'bad request',
            message: 'User already added',
        });
        return; // return is necessary to stop the execution of the subsequent middleware
    }

    next();
};

/**
 * Checks if the username is valid by consulting the github api.
 */
const validUsername = async (req, res, next) => {
    const { username } = req.body;

    try {
        res.locals.retrievedProfile = await profileService.getGithubProfile(
            username,
        );
        next();
    } catch (error) {
        // Can be a 404 or 500 error. Had to be handled here because the status code
        // is sent by the github api
        res.status(error.status).json({
            error: `${error.status} ${HttpStatus.StatusCodes[error.status]
                .toLowerCase()
                .replace('_', ' ')}`,
            message: error.message,
        });
    }
};

/**
 * Checks if the user has already been starred, if there is none returns undefined
 */
const anyoneStarred = async (req, res, next) => {
    const { username } = req.params;

    if (!username) {
        return res.status(400).json({
            error: 'bad request',
            message: "Request Params key 'username' is required",
        });// return is necessary to stop the execution of the subsequent middleware
    }

    res.locals.currentlyStarredProfile = await profileService.getStarredProfile();

    return next();
};

module.exports = {
    maximumProfiles,
    userAlreadyAdded,
    validUsername,
    anyoneStarred,
};
