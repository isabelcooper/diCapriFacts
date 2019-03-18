const Sender = require("../model/src/sender.js")

exports.create = async function (req, res) {
    sender = new Sender(req.query.reveal, req.query.theme);
    sender.addRecipient(req.query.phone);
    sender.savetoDB();
    res.redirect("/success");
    sender.run();
};
