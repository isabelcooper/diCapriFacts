const Recipient = require("../model/src/recipient.js")

exports.create = function (req, res) {
    Recipient.saveToDB(req.query.email, req.query.phone);
    res.redirect("/")
};

// exports.post_show = async function (req, res) {
//     let data = await postModel.getPosts()
//     res.send(data)
// };
