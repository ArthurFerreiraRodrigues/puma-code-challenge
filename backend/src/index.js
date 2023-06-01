const app = require('./app');
const favoritedProfiles = require('./model/users.model');
const port = 3000;

app.listen(port, () => {
    console.log(`> Backend PUMA Challenge is running on port ${port}. Access http://localhost:${port}`);
});

