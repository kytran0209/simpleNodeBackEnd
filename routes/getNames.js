const express = require("express");

const getNamesController = require("../controllers/getNames");

const router = express.Router();

router.get("/", getNamesController.getNames);

module.exports = router;