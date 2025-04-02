const express = require("express")
const bodyParser = require("body-parser")
const PORT = 8000
const app = express()
const fs = require("fs")
const path = require('path')

const plName = ["java", "python"]

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).render("index", {title: "homepage", plName: plName})
})

app.post("/", (req, res) => {
    plName.push(req.body.plName)
    res.redirect("/")
})

app.get("/contact", (req, res) => {
    res.render("contact", {title: "Contact"})
})



app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}/`)
})