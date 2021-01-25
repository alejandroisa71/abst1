const express = require("express");
const router= express.Router();

const jugadorController =require('../controllers/jugadorController');

router.get('/', jugadorController.list);

router.post('/add', jugadorController.save);
router.get('/delete/:id', jugadorController.delete);
router.get('/update/:id', jugadorController.edit);
router.post('/update/:id', jugadorController.update)


module.exports=router;