const Message = require('../models/Message');
const User = require('../models/User');

// save message in DB from user(by user id)
module.exports.create = async function(req, res) {
  const msg = new Message({
    userId: req.params.id,
    text: req.body.text
  })

  try {
    await msg.save();
    res.status(201).json(msg);
  } catch (e) {
    res.status(404).send(e.message);
  }
}

// get last message from DB and send to User
module.exports.getByUserId = async function(req, res) {
  const userId = req.params.id;
  try {
      const msg = await Message.find({userId: req.params.id});
      res.status(200).json(msg[msg.length-1]);
  } catch (e) {
    res.status(404).send(e.message);
  }

}

// get info of last message by user
const getLastDialog = async userId =>{
  try {
    const messages = await Message.find({userId: userId})
    .select('text date userId')
    .populate('userId');
    
    const last = messages.length-1;
    return messages[last]
  } catch (e) {
    console.log(e);
  }
} 


// get all last messages from all user
module.exports.getAll = async function(req, res) {
  try {
    // for all last messages
    let dialogs = [];
    // get all users from DB
    const users = await User.find();

    for (let i = 0; i < users.length; i++) {
      const lastMsg = await getLastDialog(users[i]._id);
      if (lastMsg) {
        dialogs.push(lastMsg);
      }
      
    }
    res.status(200).json(dialogs);
  } catch (e) {
    res.status(404).send(e.message);
  }

}