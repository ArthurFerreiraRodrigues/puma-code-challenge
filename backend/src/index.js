const app = require('./app');

const port = 3000;

app.listen(port, () => {
    console.log(
        `> Backend PUMA Challenge is running on port ${port}. Access http://localhost:${port}`,
    );
});
