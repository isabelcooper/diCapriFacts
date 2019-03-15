let connection = require('../../database/connection')

class Recipient {
    constructor(phone){
        this.phone = phone
    }
}

Recipient.prototype.saveToDB = async function() {
    await connection.pool.query(`INSERT INTO recipients (phone) VALUES ('${this.phone}')`);
};

module.exports = Recipient;