/**
 * Class to represent a GitHub profile
 */
class Profile {
    constructor({
        username, name, avatar, url,
    }) {
        this.username = username;
        this.name = name;
        this.avatar = avatar;
        this.url = url;
        this.isStarred = false;
    }

    toJSON() {
        return {
            username: this.username,
            name: this.name,
            avatar: this.avatar,
            url: this.url,
            isStarred: this.isStarred,
        };
    }

    static create(profile) {
        return new Profile(profile);
    }
}

/**
 * Constant to store all favorited profiles in memory
 *
 * @type {Profile[]}
 */
const favoritedProfiles = [];

module.exports = {
    Profile,
    favoritedProfiles,
};
