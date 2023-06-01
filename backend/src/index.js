const app = require('./app');
const { port } = require('./config/environment');

app.listen(port, () => {
    console.log(
        `> Backend PUMA Challenge is running on port ${port}. Access http://localhost:${port}`,
    );
    console.log(
        '- See src/config/environment.js to change ports and set maximum number of profiles.\n',
    );
});
