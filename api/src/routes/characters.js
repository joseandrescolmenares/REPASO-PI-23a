const { Router } = require('express');
// const {characters, episode } = require("../db")
const router = Router();
const {characterAll} = require('../controllers/character')

router.get('/character', async(req, res) =>{
    res.status(200).send(await characterAll())
})

module.exports = router;