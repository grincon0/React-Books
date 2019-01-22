const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");


//For API routes

router.use("/api", apiRoutes);

router.use(path.join(__dirname, "../client/public/index.html"));

module.exports = router;