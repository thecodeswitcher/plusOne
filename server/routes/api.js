const express = require('express');

const fileController = require('../controllers/taskController');

const router = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE
router.get('/',
  fileController.getCharacters,
  fileController.getFavs,
  (req, res) => {
  res.status(200).json({characters:res.locals.characters, favs:res.locals.favs})
}
)

module.exports = router;
