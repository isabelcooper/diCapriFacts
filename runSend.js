senderModel = require('./model/src/sender.js');

const runBatch = async function() {
    senders = await senderModel.getSendersUnder10();
    senders.forEach(sender => { sender.run() })
};

runBatch();