const { type } = require('express/lib/response');


exports.getIndex = (req, res, next) => {
  res.render('shop/index', {
    path: '/'
  });
};

exports.getImportPage = (req, res, next) => {
  res.render('shop/import', {
    path: '/import'
  });
}
exports.getExportPage = (req, res, next) => {
  res.render('shop/export', {
    path: '/export'
  });
}

