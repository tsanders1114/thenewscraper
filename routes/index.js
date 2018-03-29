var router = require('express').Router();

var api=require('./api')
var view= require('./view')

router.use('/', view);
router.use('/api', api);

module.exports=router;