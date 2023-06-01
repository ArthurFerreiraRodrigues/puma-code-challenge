const Profile = require('../model/Profile.class.model').default;

/**
 * @param {Profile} profileBody 
 */
const addProfile = async (profileBody) => {

    const profile = await Profile.create(profileBody);
    return profile;
}