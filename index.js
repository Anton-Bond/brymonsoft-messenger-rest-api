const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const chatRoutes = require('./routes/chat');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

const start = async () => {
  try {
    // conect to Mongo DB
    const url = `mongodb+srv://anton:B8lv22CJBsItWxyq@cluster0-jdwk7.mongodb.net/messenger`;
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (e) {
    console.log(e);
  }
}

start();