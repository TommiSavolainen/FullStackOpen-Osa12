const MONGO_URL = process.env.MONGO_URL || undefined;
const REDIS_URL = process.env.REDIS_URL || undefined;

if (MONGO_URL) {
    console.log('MONGO_URL:', MONGO_URL);
} else {
    console.error('MONGO_URL is not set');
}

module.exports = {
    MONGO_URL, //: 'mongodb://the_username:the_password@localhost:3456/the_database',
    REDIS_URL, //: '//localhost:6378'
};
