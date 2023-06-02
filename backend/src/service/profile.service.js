const fetch = require('node-fetch');
const { Profile, favoritedProfiles } = require('../model/Profile.class.model');

const { githubApiUrl } = require('../config/environment');

/**
 * Retrieve a github profile from the github api
 *
 * @param {string} username
 * @returns {Profile}
 * @throws {Error} if the username is invalid
 * @throws {Error} if the github api request fails
 */
const getGithubProfile = async (username) => {
    const githubRes = await fetch(`${githubApiUrl}${username}`);
    if (githubRes.status === 404) {
        throw {
            status: 404,
            message: 'Invalid username',
        };
    }

    if (githubRes.status !== 200) {
        throw {
            status: githubRes.status,
            message: 'Github API request failed',
        };
    }

    const githubProfile = await githubRes.json();
    return Profile.create({
        username: githubProfile.login,
        name: githubProfile.name,
        avatar: githubProfile.avatar_url,
        url: githubProfile.html_url,
    });
};

/**
 * @param {Profile} profileBody
 */
const addProfile = async (profileBody) => {
    const user = await Profile.create(profileBody);
    favoritedProfiles.push(user);
    return user;
};

const getStarredProfile = async () => favoritedProfiles.find((profile) => profile.isStarred);

const getProfileByUsername = async (username) => {
    const user = favoritedProfiles.find((profile) => profile.username === username);
    if (!user) {
        throw {
            status: 404,
            message: 'User not found',
        };
    }

    return user;
};

/**
 * @param {string} username
 * @param {Profile} currentlyStarredProfile
 * @returns {Profile}
 */
const toggleStar = async (username, currentlyStarredProfile) => {
    const user = favoritedProfiles.find((profile) => profile.username === username);
    if (!user) {
        throw {
            status: 404,
            message: 'User not found',
        };
    }

    if (!currentlyStarredProfile) {
        user.isStarred = true;
        return user;
    }

    if (user === currentlyStarredProfile) {
        user.isStarred = !user.isStarred;
        return user;
    }

    // eslint-disable-next-line no-param-reassign
    currentlyStarredProfile.isStarred = false;
    user.isStarred = true;

    return user;
};

const deleteProfile = async (username) => {
    const user = await getProfileByUsername(username);
    const index = favoritedProfiles.indexOf(user);
    favoritedProfiles.splice(index, 1);
};

module.exports = {
    getGithubProfile,
    addProfile,
    getStarredProfile,
    getProfileByUsername,
    toggleStar,
    deleteProfile,
};
