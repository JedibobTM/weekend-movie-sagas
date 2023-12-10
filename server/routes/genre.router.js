const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// router.get('/:id', (req, res) => {
//   // Add query to get all genres
//   console.log(req.params, "are the req.params");

//   pool
//     .then((result) => {
//       console.log('Hello world', result);
//     }) .catch ((error) => {
//       console.log("ERROR in pool query");
//       res.sendStatus(500);
//     })
//   res.sendStatus(500)
// });

module.exports = router;