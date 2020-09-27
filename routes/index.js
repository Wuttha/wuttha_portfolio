const express = require('express');
const router = express.Router();
const myData = require('../data');

router.get('/',(req,res)=>{
    res.render('index',{myData, helpers: {
        experience: function () { 
            let currentYear = new Date().getFullYear();
            let exp= Number.parseInt(currentYear) - 2016;
            return exp; }
    }});
});

module.exports = router;