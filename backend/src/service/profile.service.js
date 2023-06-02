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
        throw new Error('Github API request failed');
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

module.exports = {
    getGithubProfile,
    addProfile,
};
