module.exports = {
    api: {
        port: process.env.API_PORT || 3000
    },
    db: {
        dbUrl: process.env.DB_URL || 'mongodb+srv://db_user:DyNRu4DeKNCUTPi5@cluster0-xdbps.mongodb.net/test?retryWrites=true&w=majority',
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'http://localhost'
    }
}