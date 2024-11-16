const mssql = require('mssql')

require("dotenv").config()

const dbConfig = {
    user: process.env.APP_DB_USER,
    password: process.env.APP_DB_SECRET,
    server: process.env.APP_DB_HOST,
    database: process.env.APP_DB_NAME,
    port: parseInt(process.env.APP_DB_PORT, 10),
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}

const poolPromise = new mssql.ConnectionPool(dbConfig)
.connect()
.then((pool) => {
    console.log("Connected to DB")
    return pool;
})
.catch((err) => {
    console.log("Database Connection Failed!", err);
    process.exit(1) // Exit the Application if Db Connection Fails
})

module.exports = {
    poolPromise,
    mssql
}
