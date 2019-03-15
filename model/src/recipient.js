let connection = require('../../database/connection')

class Recipient {
    constructor(phone){
        this.phone = phone
    }
}

Recipient.prototype.saveToDB = async function() {
    await connection.pool.query(`INSERT INTO recipients (email, phone) VALUES ('${this.phone}')`);
    console.log("recipient added to DB");
};

module.exports = Recipient;