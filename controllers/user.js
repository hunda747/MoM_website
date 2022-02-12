const { type } = require('express/lib/response');


exports.getIndex = (req, res, next) => {
  res.render('shop/index', {
    path: '/'
  });
};

exports.getRegulation = (req, res, next) => {
  res.render('shop/regulation', {
    path: '/regulation'
  });
}

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
exports.getOverview = (req, res, next) => {
  res.render('shop/overview', {
    path: '/overview'
  });
}
exports.getLogin = (req, res, next) => {
  res.render('admin/adminLogin', {
    path: '/adminLogin',
    message: ''
  });
}