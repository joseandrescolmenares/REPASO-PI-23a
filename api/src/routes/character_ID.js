const { Router } = require('express');
const {characters, episode } = require("../db")
const {characterID} =require("../controllers/character_Id")
const router = Router();


router.get("/character/:id", (req, res) =>{

})