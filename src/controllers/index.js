const { validationResult } = require("express-validator")

const index = (req, res) => {
    res.render("index")
}

const loginView = (req, res) => {
    res.send("Ingresa sesion")
}

const login = (req, res) => {
    const erroresExpressValidator = validationResult(req)
    console.log(erroresExpressValidator.mapped())

    if (!erroresExpressValidator.isEmpty()) {
        res.render("index", {
            errores: erroresExpressValidator.mapped()
        })
    }

    res.redirect("/")
}

module.exports = { 
    index,
    loginView,
    login
}