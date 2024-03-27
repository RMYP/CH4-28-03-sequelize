const express = require("express")
const router = express.Router()

const Customer = require("../controller/customerController")

router.post("/", Customer.createCustomer);
router.get("/", Customer.testAPI);

module.exports = router;