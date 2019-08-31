var express = require('express');
var router = express.Router();

/* Modeli Ekleme */
var Developer = require("../models/Developer");

/* Developer Listeleme Islemi */
router.get('/', function(req, res, next) {
  
    Developer.find().then((developers) => {
      res.json(developers);
    }).catch((err) => {
      res.json(err);
    });
  
});

/* Developer Bulma Islemi */
router.get('/:id', function(req, res, next) {
  
    var id = req.params.id;
    Developer.findById(id).then((developers) => {
      res.json(developers);
    }).catch((err) => {
      res.json(err);
    });
  
});

/* Developer Ekleme Islemi */
router.post("/", function(req, res, next){
 
    new Developer({
        name: req.body.name,
        surname: req.body.surname,
        job: req.body.job,
        description: req.body.description,
        photo: req.body.photo,
    
        mail: req.body.mail,
        phone: req.body.phone,

        country: req.body.country,
        city: req.body.city,
        address: req.body.address,
    
        username: req.body.username,
        password: req.body.password,
        isConfirm: req.body.isConfirm,
    
        createdDate: req.body.createdDate,
        lastLoginDate: req.body.lastLoginDate,
    }).save().then(() => {
        res.json("Kaydetme İşlemi Başarılı.");
    }).catch((err) => {
        res.json("Kaydetme İşleminde Hata Oluştu.");
    });
  
});

/* Developer Guncelleme Islemi */
router.put("/:id", function(req, res, next){
  
    var id = req.params.id;

    Developer.findByIdAndUpdate({"_id": id}, req.body).then((newDeveloper) => {
        res.json("Güncelleme İşlemi Başarılı.");
    }).catch((err) => {
        res.json("Güncelleme İşleminde Hata Oluştu.");
    });
  
});

/* Developer Silme Islemi */
router.delete("/:id", function(req, res, next){
  
    var id = req.params.id;
    Developer.findByIdAndRemove(id).then(() => {
        res.json("Silme İşlemi Başarılı.");
    }).catch((err) => {
        res.json("Silme İşleminde Hata Oluştu.");
    });
  
});

module.exports = router;