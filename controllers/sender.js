const Sender = require("../model/src/sender.js")

exports.create = function (req, res) {
    console.log(req.query);
    sender = new Sender(req.query.reveal, req.query.theme);
    sender.addRecipient(req.query.phone);
    sender.run()
  //  sender.saveToDB(req.query.phone);
    res.redirect("/success")
};

//

// exports.post_show = async function (req, res) {
//     let data = await postModel.getPosts()
//     res.send(data)
// };
