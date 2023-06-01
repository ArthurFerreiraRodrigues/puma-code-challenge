const express = require('express');
const users = require('./users.route');

const router = express.Router();

const routes = [
    {
        path: '/users',
        route: users,
    },
];

routes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
