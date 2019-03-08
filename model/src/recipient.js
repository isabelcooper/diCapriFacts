let connection = require('../../database/connection')

class Recipient {
    constructor(email){
        this.email = email;
    }

    // static async saveToDB(email, phone) {
    //     await connection.pool.query(`INSERT INTO recipients (email, phone) VALUES ('${email}', '${phone}')`);
    // };
}

Recipient.prototype.saveToDB = function(email, phone) {
    connection.pool.query(`INSERT INTO recipients (email, phone) VALUES ('${email}', '${phone}')`);
}

module.exports = Recipient;