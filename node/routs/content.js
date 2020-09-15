const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const generator = require('generate-password');
const testEmail = require('../midleware/testEmail');
const testPassword = require('../midleware/testPassword');

router.get('/',
    checkSession(), testEmail, testPassword,

    function(req, res, next) {

        if(!req.body.login)


            let md5sum = crypto.createHash('md5');

        md5sum.update("1111111111111111111");
        const _access = crypto.createHash('md5');
        const _refresh =   md5sum.update("22222222222");
        const _refrash = crypto.createHash('md5');
        res.json({access: _access, refrash: _refrash});



    });
router.post('/add/:id',
    checkSession(), function(req,res, next){



    });

router.post('/remove/:id',
    checkSession(), function(req,res, next){



    });
router.post('/change/:id',
    checkSession(), function(req,res, next){



    });














module.exports = router;
