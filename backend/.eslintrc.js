module.exports = {
    env: {
        browser: true,
        node: true,
        commonjs: true,
        jest: true,
        es2021: true,
    },
    extends: 'airbnb-base',
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'no-console': 'off',
        indent: ['error', 4],
    },
};
