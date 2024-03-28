const express = require("express")
const router = express.Router()

const CustomerAdmin = require("../controller/customerAdminController")

router.get("/", CustomerAdmin.customerPage);
router.get("/create", CustomerAdmin.createCustomerPage);
router.post("/admin/create", CustomerAdmin.createCustomer);
router.get("/edit/:id", CustomerAdmin.editCustomerPage);
router.post("/admin/edit/:id", CustomerAdmin.editCustomer);
router.post("/admin/delete/:id", CustomerAdmin.deleteById);

module.exports = router;

// postMan still cant be used