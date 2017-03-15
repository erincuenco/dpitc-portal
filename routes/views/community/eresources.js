var keystone = require('keystone');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'eresources';

  view.query('industries', keystone.list('Industry').model.find())
  view.query('sectors', keystone.list('Sector').model.find())
  view.query('commodities', keystone.list('Commodity').model.find())

  view.query('publications', keystone.list('Publication').model.find())

  view.render('community/eresources', {loginRedirect: '/eresources', breadcrumbs: [
      { text: 'E Resources', link: '/eresources'},
    ]
  });
}