const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    res.json(req.body);
  },
};
