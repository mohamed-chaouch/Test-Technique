const express = require("express");

const router = express();

const Cour = require("../models/cour");

const multer = require("multer");

filename = '';

const mystorage = multer.diskStorage({
    destination : './uploads',
    filename : (req , file , redirect)=>{
        let date = Date.now();
        let fl = date + '.' + file.mimetype.split('/')[1];
        redirect( null , fl );
        filename = fl;
    }
})

const upload = multer({storage : mystorage});

router.post( "/add" , upload.any('image') , (req , res)=>{
    data = req.body;
    cour = new Cour(data);
    cour.image = filename;

    cour.save()
        .then(
            (newCour)=>{
                filename="";
                res.status(200).send(newCour);
            }
        )
        .catch(
            (err)=>{
                res.status(400).send(err);
            }
        )
});


router.get("/getAll" , (req, res)=>{
    Cour.find()
        .then(
            (allCours)=>{
                res.status(200).send(allCours);
            }
        )
        .catch(
            (err)=>{
                res.status(400).send(err);
            }
        )
} );

router.get( '/getbyid/:id' , (req ,res)=>{
    myid = req.params.id;
    Cour.findById({ _id : myid })
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
} )

router.delete( '/delete/:id' , (req, res)=>{
    myid = req.params.id;
    Cour.findOneAndDelete({ _id : myid })
        .then(
            (deletedCour)=>{
                res.status(200).send(deletedCour);
            }
        )
        .catch(
            (err)=>{
                res.status(400).send(err);
            }
        )
})

router.put( '/update/:id' , upload.any('image') , async (req ,res)=>{
    newData = req.body;
    myid = req.params.id;
    if(filename.length > 0){
        newData.image = filename;
    }

    Cour.findByIdAndUpdate({ _id : myid } , newData)
        .then(
            (updatedCour)=>{
                filename = '';
                res.status(200).send(updatedCour);
            }
        )
        .catch(
            (err)=>{
                res.status(400).send(err);
            }
        )
} )

module.exports = router;