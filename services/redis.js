const redis = require('redis');

const client = redis.createClient({ host: 'redis', port: '6379' });

client.on('connect', () => {
  console.log('Redis Client Connected');
});

client.on('error', (err) => {
  console.log(`Something went wrong ${err}`);
});

module.exports = client;
