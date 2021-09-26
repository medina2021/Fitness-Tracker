const router = require("express").Router();
const express = require("express")

const apiRoutes = require("./apiRoutes.js");
const htmlRoutes = require("./htmlRoutes.js");

router.use(htmlRoutes);
router.use(apiRoutes);

module.exports = router;
