const db = require('mongoose')

db.Promise = global.Promise

//'mongodb+srv://db_user:DyNRu4DeKNCUTPi5@cluster0-xdbps.mongodb.net/test?retryWrites=true&w=majority'

async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('[db] Conectada con éxito')
}

module.exports = connect

