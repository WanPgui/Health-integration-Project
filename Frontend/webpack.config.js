const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
module.exports = {
    //...
    resolve: {
      modules: ['src/styles'],
    },
  };
  module.exports = {
    //...
    resolve: {
      fallback: {
        events: require.resolve("events/"),
      },
    },
  };
 
  module.exports = {
    //...
    resolve: {
      fallback: {
        buffer: require.resolve("buffer/"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        http: require.resolve("stream-http"),
        os: require.resolve("os-browserify/browser"),
        path: require.resolve("path-browserify"),
        timers: require.resolve("timers-browserify"),
        vm: require.resolve("vm-browserify"),
        zlib: require.resolve("browserify-zlib"),
      },
    },
  };