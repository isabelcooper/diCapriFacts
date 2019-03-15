const Sender = require("../model/src/sender.js")

exports.create = function (req, res) {
    sender = new Sender(req.query.reveal, req.query.theme);
    sender.addRecipient(req.query.phone);
    sender.run()
  //  sender.saveToDB(req.query.phone);
    res.redirect("/success")
};

// sender: `
// 1) add recipient to DB
// 2) run first text TO CORRECT NUMBER
// 3) update db to remember first text has been sent
// 4) add a time delay
// 5) find recipient by id in db when time elapsed (??) & trigger next .... etc.

// OR just create one sender the first time and keep adding contacts to it? store number of remaining spaces on people??

// exports.post_show = async function (req, res) {
//     let data = await postModel.getPosts()
//     res.send(data)
// };
