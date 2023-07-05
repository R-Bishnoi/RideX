const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const Carpool = require('../models/Carpool');
const SearchHistory = require('../models/searches');

router.get('/dest', async (req, res) => {
    try {
      // Find all Carpool documents in the database
      const carpools = await Carpool.find({}, 'destination');
  
      // Extract the destination addresses from the Carpool documents
      const destinations = carpools.map((carpool) => carpool.destination);
  
     
      // Convert destinations array to a string
      const destinationsString = JSON.stringify(destinations);
       res.send(destinationsString)
      //res.render('map2' ,{destinations});
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

  router.get('/search/latest', (req, res) => {
    SearchHistory.findOne().sort({ timestamp: -1 }).exec()
      .then(searchHistory => {
        if (!searchHistory) {
          res.status(404).json({ error: 'Search history not found' });
        } else {
          const latestSearch = searchHistory.query.toString();
          res.status(200).send(latestSearch);
        }
      })
      .catch(err => {
        res.status(500).json({ error: 'Error retrieving search history' });
      });
  });

  

router.get('/findall', async (req, res) => {
    try {
      // Find all Carpool documents in the database
      const carpools = await Carpool.find({}, 'destination');
  
  
      // Extract the destination addresses from the Carpool documents
      const destinations = carpools.map((carpool) => carpool.destination);
          
      
     res.render('map2');
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });



module.exports= router;