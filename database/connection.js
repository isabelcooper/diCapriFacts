const {DataBaseURL, Local} = require ('.././config.js')
const Pool = require("pg").Pool;
// const dotenv = require('dotenv');
// dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL ,
    ssl: !Local
});
console.log(`Connected to database ${DataBaseURL}`);

module.exports.pool = pool;

