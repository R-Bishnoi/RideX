const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated ,curruser} = require('../config/auth');
const User = require('../models/User');
const Carpool = require('../models/Carpool');
const searches = require('../models/searches');

var source;

router.get('/', ensureAuthenticated, (req, res) => {
  let username = req.user.username;
  
  //console.log(source);
  let todayDate = Date.now();
  Carpool.find({ giver: { $ne: username }, recievers: { $ne: username }, date: { $gt: todayDate }, nopeople: { $gt: 0 } })
    .then((results) => {
      res.render('dashboard', {
        user: req.user,
        username,
        carpools: results,
        query: null,
      });
    });
});


router.get('/profile/:id', ensureAuthenticated, async (req, res) => {
  let id = req.params.id;
  const user = await User.findOne({ _id: id });
  const carpoolAccepted = await Carpool.find({ recievers: { $in: [req.user.username] } });
  const carpoolListed = await Carpool.find({ giver: req.user.username });
  res.render('profile', { user, carpoolAccepted, carpoolListed });
});


router.post('/', async (req, res) => {
  try {
    const query = req.body.query;//take the seach name
  
    const newSearch = new searches({
      query: query
    });
///saving the seach name 
    await newSearch.save();



    const results = await Carpool.find({ $or: [{ origin: { $regex: query, $options: 'i' } }, { description: { $regex: query, $options: 'i' } }, { destination: { $regex: query, $options: 'i' } }] });

    res.render('dashboard', {
      user: req.user,
      username: req.user.username,
      carpools: results,
      query,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router 
