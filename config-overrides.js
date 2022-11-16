const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@assets': path.resolve(__dirname, 'assets'),
      '@components': path.resolve(__dirname, 'components'),
      '@interfaces': path.resolve(__dirname, 'interfaces'),
      '@pages': path.resolve(__dirname, 'pages'),
      '@services': path.resolve(__dirname, 'services'),
      '@styles': path.resolve(__dirname, 'styles')
    },
  };

  return config;
};