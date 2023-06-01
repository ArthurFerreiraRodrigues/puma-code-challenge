const faker = require('faker');
const Profile = require('../../src/model/Profile.class.model').default;

describe('Profile Model', () => {
    describe('Profile Validation', () => {
        let newProfile;
        beforeEach(() => {
            newProfile = {
                username: faker.internet.userName(),
                name: faker.name.findName(),
                avatar: faker.internet.avatar(),
                url: faker.internet.url(),
            };
        });

        test('Should correctly validate a valid profile', async () => {
            await expect(
                new Profile(newProfile).validate(),
            ).resolves.toBeUndefined();
        });

        test('Should throw a validation error if username is invalid', async () => {
            newProfile.username = '!!!';
            await expect(new Profile(newProfile).validate()).rejects.toThrow();
        });

        test('should throw a validation error if name is invalid', async () => {
            newProfile.name = 'invalid name';
            await expect(new Profile(newProfile).validate()).rejects.toThrow();
        });

        test('should throw a validation error if avatar is invalid', async () => {
            newProfile.avatar = 'invalid avatar';
            await expect(new Profile(newProfile).validate()).rejects.toThrow();
        });

        test('should throw a validation error if url is invalid', async () => {
            newProfile.url = 'invalid url';
            await expect(new Profile(newProfile).validate()).rejects.toThrow();
        });
    });

    describe('Profile toJSON()', () => {
        test('Should return all profile info and not starred', () => {
            const profile = new Profile({
                username: faker.internet.userName(),
                name: faker.name.findName(),
                avatar: faker.internet.avatar(),
                url: faker.internet.url(),
            });
            expect(profile.toJSON()).toMatchObject({
                username: profile.username,
                name: profile.name,
                avatar: profile.avatar,
                url: profile.url,
                isStarred: false,
            });
        });
    });
});
