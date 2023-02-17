const path = require('path');
const conf = require('../conf')
module.exports = ({ env }) => ({
  connection: 
  (conf.TEST_DATABASE) ?
  {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  } : 
  {
    client: 'mysql',
    connection: {
      ssl: env.bool('DATABASE_SSL', false),
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi_db'),
      user: env('DATABASE_USERNAME', 'strapi_admin'),
      password: env('DATABASE_PASSWORD', '1Qazxc2Wsxcv'),
    },
  },
});
