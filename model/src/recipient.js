let connection = require('../../database/connection')

class Recipient {
    constructor(phone){
        this.phone = phone
    }

    // static async saveToDB(email, phone) {
    //     await connection.pool.query(`INSERT INTO recipients (email, phone) VALUES ('${email}', '${phone}')`);
    // };
}

Recipient.prototype.saveToDB = async function() {
    await connection.pool.query(`INSERT INTO recipients (email, phone) VALUES ('${this.phone}')`);
}

module.exports = Recipient;