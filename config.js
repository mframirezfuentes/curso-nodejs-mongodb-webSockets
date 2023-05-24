require('dotenv').config()

const config = {
    dburl: process.env.MONGO_URI,
    port: process.env.PORT,
    host: process.env.HOST,
    publicRoute: process.env.PUBLIC_ROUTE
}

module.exports = config