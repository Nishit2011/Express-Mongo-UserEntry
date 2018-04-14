var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('https://restcountries.eu/rest/v1/region/Europe', function(req,res,next){
// 	console.log(res)
// });




// request.get('https://someplace',options,function(err,res,body){
//   if(err) //TODO: handle err
//   if(res.statusCode !== 200 ) //etc
//   //TODO Do something with response
// console.log('**',res);
// });

router.get('https://restcountries.eu/rest/v1/region/Europe',function(err,res,body){
  if(err) //TODO: handle err
  if(res.statusCode !== 200 ) //etc
  console.log('res:---',res);
});

module.exports = router;
