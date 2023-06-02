const { faker } = require('@faker-js/faker');
const { Profile } = require('../../src/model/Profile.class.model');
const { getGithubProfile } = require('../../src/service/profile.service');

describe('Profile Model', () => {
    describe('Profile Validation', () => {
        let newProfile;
        let githubRes;
        beforeEach(() => {
            newProfile = {
                username: faker.internet.userName(),
                name: faker.person.firstName(),
                avatar: faker.internet.avatar(),
                url: faker.internet.url(),
                isStarred: false,
            };
            githubRes = {
                username: newProfile.username,
                name: newProfile.name,
                avatar: newProfile.avatar,
                url: newProfile.url,
            };
        });

        test('Should correctly validate a valid profile', async () => {
            const createdProfile = await Profile.create(githubRes);
            expect(newProfile).toEqual(createdProfile);
        });

        test('Should throw a validation error if username is invalid', async () => {
            const invalidUsername = '!!!';
            try {
                await getGithubProfile(invalidUsername);
                expect(true).toBe(false);
            } catch (e) {
                expect(e).toEqual({
                    status: 404,
                    message: 'Invalid username',
                });
            }
        });
    });

    describe('Profile toJSON()', () => {
        test('Should return all profile info and to not be starred', () => {
            const profile = new Profile({
                username: faker.internet.userName(),
                name: faker.person.firstName(),
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
