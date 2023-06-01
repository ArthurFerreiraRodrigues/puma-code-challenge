const { Profile, favoritedProfiles } = require('../model/Profile.class.model');

/**
 * @param {Profile} profileBody
 */
const addProfile = async (profileBody) => {
    const user = await Profile.create(profileBody);
    favoritedProfiles.push(user);
    return user;
};

module.exports = {
    addProfile,
};
