const router = require("express").Router();

const Customer = require("./customerRouter")
const CustomerAdmin = require("./customerAdminRouter")
// const Product = require("./productRouter")

router.use("/api/v1/customers", Customer);
router.use("/customers", CustomerAdmin);

module.exports = router;