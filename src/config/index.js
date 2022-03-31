let config = {};

const environment = process.env.REACT_APP_NODE_ENV;
if (environment === 'prod') {
  config = require('./config.prod');
} else if (environment === 'dev') {
  config = require('./config.dev');
} else if (environment === 'local') {
  config = require('./config.local');
} else {
  console.log('No env configuration found!');
}

export default config;
