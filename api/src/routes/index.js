const { Router } = require("express");
const characters = require("./characters")
const character_id = require("./character_ID")
const episodes = require("./episodes")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);)

router.get("/character", characters)
router.get("/character/:id", character_id)
 router.get("/episodes", episodes)

module.exports = router;
