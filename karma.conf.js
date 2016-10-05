module.exports = function (config) {
    config.set({
        files: [
            // only specify one entry point 
            // and require all tests in there 
            'test/test-all.js'
        ],

        preprocessors: {
            // add webpack as preprocessor
            'test/test-all.js': ['webpack']
        },

        webpack: {
            // karma watches the test entry points
            // (you don't need to specify the entry option)
            // webpack watches dependencies

            // webpack configuration
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            stats: 'errors-only'
        }
    });
};