let connection = require('../../database/connection')

class Recipient {
    constructor(phone){
        this.phone = phone
    }
}

Recipient.prototype.saveToDB = async function(request, response) {
    await connection.pool.query(`INSERT INTO recipients (phone) VALUES ('${this.phone}')` , (error, response) => {
        if (error) {
            throw error
        }
    });
};



module.exports = Recipient;
