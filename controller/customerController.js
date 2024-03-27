const {Customer} = require("../models")

const createCustomer = async (req, res) => {
    const {name, age, email, city} = req.body;

    try {
        const newCustomer = await Customer.create({
            name,
            age,
            email,
            city
    })
    res.status(200).json({
        status: " success",
        datal: {
            newCustomer
        }
    })
    } catch (err) {
        console.log(err.message)
    }
};

const testAPI = (req, res) => {
    res.status(200).json({
        status: "success"
    })
}

module.exports = {createCustomer, testAPI}