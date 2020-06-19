const User = require('../models/User');

// create new user
module.exports.create = async function(req, res) {
  const user = new User({
    name: req.body.name,
    imageSrc: req.body.imageSrc ? req.body.imageSrc : '',
    phone: req.body.phone
  })

  try {
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    res.status(404).send(e.message);
  }
}

// get user by name or phone, it depends on query parametr
module.exports.getByNameOrPhone = async function(req, res) {

  try {
    // by name
    if (req.query.name) {
      const name = req.query.name.toString();
      const users = await User.find({name: name});
      res.status(200).json(users);
    // by phone
    } else if (req.query.phone)  {
      const phone = req.query.phone.toString();
      const users = await User.find({phone: phone});
      res.status(200).json(users);
    } else {
      res.status(400).json({message: 'invalid parameter'});
    }
  } catch (e) {
    res.status(404).send(e.message);
  }

}