const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    AccSId: process.env.ACCOUNTSID,
    AuthToken: process.env.AUTHTOKEN,
    FromNumber: process.env.FROMNUMBER,
    TestToNumber: process.env.TESTTONUMBER,
    DataBaseURL: process.env.DATABASE_URL,
    Local: process.env.LOCAL
};

