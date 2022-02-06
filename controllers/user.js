const { type } = require('express/lib/response');


exports.getIndex = (req, res, next) => {
  res.render('shop/index', {
    path: '/'
  });
};



