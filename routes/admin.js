var express = require('express');
const { routes } = require('../app');
var router = express.Router();
var tableProduct = require('../Model/showProduct');
var selectBoxShop = require('../Model/showSelectBoxShop');
var getTableSelectProduct = require('../Model/getSelectedProduct');

/* GET users listing. */
router.get('/', async function(req, res, next) {
    let listSelectShop = await selectBoxShop();
    let tableProduct = await getTableSelectProduct('all');
    let username = req.session.user.username;
   if(username) {
    res.render('admin',{selectBox: listSelectShop,result: tableProduct,name: username});
   } else {
    res.render('/login');
   }
});

router.post('/findShop', async function (req, res, next) {
    let username = req.session.user.username;
 let name = req.body.shop;
  let listSelectShop = await selectBoxShop();
  var tableProduct = await getTableSelectProduct(name);
  res.render('admin',{selectBox: listSelectShop,result: tableProduct,name: username});
});

module.exports = router;