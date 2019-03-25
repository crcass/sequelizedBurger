const db = require('../models');

module.exports = app => {
  app.get('/', (req, res) => {
    db.Burger.findAll({}).then(data => {
      const hbsObject = { burgers: data };
      return res.render('index', hbsObject);
    });
  });

  app.post('/api/burgers', (req, res) => {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
    }).then(result => {
      return res.json(result);
    });
  });

  app.put('/api/burgers/:id', (req, res) => {
    db.Burger.update(
      {
        devoured: req.body.devoured,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(result => {
      return res.json(result);
    });
  });
};
