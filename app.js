require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const flash = require('connect-flash');
const session = require('express-session')

const router = require("./routes")

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(flash)
app.use(session({
    secret: "anastasia",
    saveUninitialized: true,
    resave: true,
}))
app.set("views", __dirname +"/views")
app.set("view engine", "ejs")
app.use(morgan('dev'))
app.use(router);

app.use(express.static(`${__dirname}/public`))

app.listen(PORT, () => {
    console.log(`server berjalan di port :  ${PORT}`)
})