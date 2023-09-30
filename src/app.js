const express = require("express")
const { router } = require("./routes")
const morgan = require("morgan")

const app = express()
const PORT = 8000

app.set("view engine", "ejs")
app.set("views", "./src/views")

app.use(express.urlencoded({ extended: true }))


app.use(express.static("public"))
app.use(morgan("dev"))

app.use("/", router)
app.listen(PORT, () => console.log(`[server]: runnning on port ${PORT}`))