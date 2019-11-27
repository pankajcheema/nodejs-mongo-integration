var express = require('express');
var router = express.Router();
var test2 = require('./../controllers/TestController');


router.post('/insert', async function(req, res, next)  {
   try {
    console.log(req.body);
    let result = test2.insert(req.body);
    console.log(result);
    console.log("executed");
    return res.status(200).send({});
   } catch (error) {
    return res.status(500).send(error);
   }

});

router.post('/cat', async function(req, res, next)  {
    try {
     console.log(req.body);
     let result = await test2.Cat(req.body);
     
     return res.status(200).send(result);
    } catch (error) {
        throw error;
    }
 
 });

module.exports = router;