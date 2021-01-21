const express = require("express");
const router= express.Router();

const jugadorController =require('../controllers/jugadorController');

router.get('/', jugadorController.list);

module.exports=router;