module.exports = {
    parserOptions: {
        sourceType: 'module',
        ecmVersion : 8
    }
    env: {
        jest: true,
    }
    globals: {
        page: true,
        browser: true,
        context: true,
        jestPupperteer: true
    }
}