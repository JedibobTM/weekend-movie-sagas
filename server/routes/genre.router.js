const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  const query = `
    SELECT "movies"."title", "genres"."name"
    FROM "movies"
    INNER JOIN "movies_genres"
    ON "movies_genres"."movie_id" = "movies"."id"
    INNER JOIN "genres"
    ON "genres"."id" = "movies_genres"."genre_id"
    WHERE "id" = ${req.params.id}
  `;

  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
      console.log("results.rows", result.rows);
    }) .catch ((error) => {
      console.log("ERROR in pool query");
      res.sendStatus(500);
    })
  res.sendStatus(500)
});

module.exports = router;