const express = require('express');
const profileController = require('../controller/profile.controller');
const profileMiddleware = require('../middleware/profile.middleware');

const router = express.Router();

router
    .route('/')
    .get(profileController.listProfiles)
    .post(
        profileMiddleware.maximumProfiles,
        profileMiddleware.userAlreadyAdded,
        profileMiddleware.validUsername,
        profileController.addProfile,
    );

router.route('/:username').delete(profileController.deleteProfile);

router.route('/:username/toggle-star').patch(profileController.toggleStar);

module.exports = router;
