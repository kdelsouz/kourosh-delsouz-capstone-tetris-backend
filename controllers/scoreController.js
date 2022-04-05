const knex = process.env.NODE_ENV === 'production'
? require('knex')(require('../knexfile').production)
: require('knex')(require('../knexfile').development);

exports.index = (_req, res) => {
  knex('scores')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Scores ${err}`));
};

exports.create = (req, res) => {
  console.log(req.query)
  knex('scores')
    .insert({
      name: req.query.name,
      score: parseInt(req.query.score),
    })
    .then(() => res.status(200).send('Succesfully added score to leaderboard'))
    .catch((err) => res.status(400).send('Error with receiving score details'));
};

