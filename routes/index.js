const router = require("express").Router();

const Customer = require("./customerRouter")
// const Product = require("./productRouter")

router.use("/api/v1/customer", Customer)

module.exports = router;