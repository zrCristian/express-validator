const express = require("express")
const { index, loginView, login } = require("../controllers")
const { check } = require("express-validator")

const validator = [
    check("email")
        .notEmpty().withMessage("El email no puede estar vacio.")
        .isLength({min: 10, max: 25}).withMessage("El email puede tener entre 10 y 25 caracteres")
        .isEmail(),
    check("username")
        .notEmpty().withMessage("El Nombre de Usuario no puede estar vacio.")
        .isLength({min: 6, max: 15}).withMessage("El Nombre de Usuario puede tener entre 6 y 15 caracteres")
    
]

const router = express.Router()

router.get("/", index)
router.get("/login", loginView)

router.post("/login", validator, login)



module.exports = {
    router
}