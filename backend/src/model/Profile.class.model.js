class Profile {

    constructor({
        username,
        name,
        avatar,
        url,
    }) {
        this.username = username;
        this.name = name;
        this.avatar = avatar;
        this.url = url;
        this.isStarred = false;
    };

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

export default Profile;