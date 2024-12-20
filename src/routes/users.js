var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/d', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/test',function(req,res){
  res.send("Welcome");
  res.end();
})

module.exports = router;
