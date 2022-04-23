const { Router } = require('express')
const {Characters} = require('../db')
const router = Router()
const {createCharacter} = require('../controllers/Post_character')

router.post("/create", (req, res) =>{
    const {name, species, origen, image, episodios} = req.body
    res.status(200).send(createCharacter(name, species, origen, image, episodios))
})

module.exports = router;