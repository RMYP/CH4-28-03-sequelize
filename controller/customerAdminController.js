const {Customer} = require("../models")

const customerPage = async (req, res) => {
    try {
        const customers = await Customer.findAll()
        res.render("customer/index.ejs", {
            customers,
            message: req.flash()
        })
    } catch (error) {
        res.render("error.ejs", {
            message: error.message
        })
    }
}
const createCustomerPage = async (req, res) => {
    const {name, age, email, city} = req.body;
    try {
        res.render("customer/create.ejs")
    } catch (err) {
        console.log(err.message)
    }
};

const createCustomer = async (req, res) => {
    try {
        await Customer.create(req.body);
        req.flash("message", "Ditambah")
        res.redirect("/customers")
    } catch (err) {
        console.log(err)
    }
}

const editCustomerPage = async (req, res) => {
    try {
        const customers = await Customer.findById(req.params.id)
        res.render("customer/edit.ejs", {
            customers,
        })
    } catch (error) {
        res.render("error.ejs", {
            message: error.message
        })
    }
}

const editCustomer = async (req, res) => {
    try {
        const customers = await Customer.update( req.body, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/customer")
    } catch (error) {
        res.render("error.ejs", {
            message: error.message
        })
    }
}
const deleteById = async (req, res) => {
    try {
        const customers = await Customer.destroy( req.body, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/customer")
    } catch (error) {
        res.render("error.ejs", {
            message: error.message
        })
    }
}

module.exports = {customerPage, createCustomerPage, createCustomer,editCustomerPage,editCustomer, deleteById}