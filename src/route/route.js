const express = require("express");
const runningController = require("../controller/runningController");
const router = express.Router();

router.get("/runningStatus", runningController.runningStatus);

module.exports = router;
