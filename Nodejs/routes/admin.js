const express = require('express');

const router = express.Router();

const Admin = require('../models/admin');

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

router.post( '/register' , async (req , res)=>{
    data = req.body;
    admin = new Admin(data);
    
    sal = bcrypt.genSaltSync(10);
    passCrypt = await bcrypt.hashSync( data.password , sal );
    admin.password = passCrypt;

    admin.save()
        .then(
            (newAdmin)=>{
                res.status(200).send(newAdmin);
            }
        )
        .catch(
            (err)=>{
                res.status(400).send(err);
            }
        )

});

router.post( '/login' , async (req , res)=>{
    data = req.body;
    admin = await Admin.findOne({ email : data.email });
    if(admin){
        Validpass = bcrypt.compareSync(data.password , admin.password);
        if(Validpass){
            payload={
                _di : admin._id,
                nom : admin.nom,
                prenom : admin.prenom,
                email : admin.email
            }
            token = jwt.sign( payload , "1234567" );
            res.status(200).send({ mytoken : token });
        }else{
            res.status(400).send('email or password incorrect!!');       
        }
    }else{
        res.status(400).send('email or password incorrect!!');
    }
});


router.get("/getById/:id" , (req ,res)=>{
    myid = req.params.id;
    Admin.findById({ _id : myid })
        .then(
            (admin)=>{
                res.status(200).send(admin);
            }
        )
        .catch(
            (err)=>{
                res.status(400).send(err);
            }
        )
});



module.exports = router;