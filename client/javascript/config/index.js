//test
exports = module.exports = {
    environment: process.env.NODE_ENV,
    port: '6081',
    api: {
        url: 'http://' + process.env.CLIENT_DOMAIN + ':6081' +  process.env.CLIENT_API_PATH
    }
};