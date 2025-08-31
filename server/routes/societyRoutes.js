const express = require("express");
const router = express.Router(); //mini server, executes routes separately to avoid mess
const {
    handleGetAllSocieties,
    handleGetSocietyByName,
    handleAddSociety,
    handleUpdateSociety,
    handleDeleteSociety,
} = require("../controllers/societyController");

router.get("/", handleGetAllSocieties);
router.get("/:name", handleGetSocietyByName);

//protected routes
router.post()

module.exports = router;
