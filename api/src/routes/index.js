const { Router } = require("express");
const characters = require("./characters")
const character_id = require("./character_ID")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);)

router.get("/character", characters)
router.get("/character/:id", character_id)
 

module.exports = router;
