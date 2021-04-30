const e = require("express")
const path = require("path")
const addtogame = require("./addtogame.js")
const bazadanych = require("./bazadanych.js")
module.exports = function (app) {
    app.get("/", (req, res) => {
        console.log(req.session.numerpokoju)
        if (Number.isInteger(req.session.numerpokoju))
            res.redirect("/poczekalnia")
        else
            res.sendFile(path.join(__dirname, "..", "static", "pages", "lobby.html"))
    })
    app.post("/register", (req, res) => {
        let informacje = addtogame(req.body.nickname)
        req.session.numerpokoju = informacje[0]
        req.session.uid = informacje[1] // ZROBIĆ 
        res.redirect("/poczekalnia")

    })
    app.get("/poczekalnia", (req, res) => {
        if (Number.isInteger(req.session.numerpokoju))
            res.sendFile(path.join(__dirname, "..", "static", "pages", "poczekalnia.html"))
        else
            res.redirect("/")
    })
    app.get("/users", (req, res) => {
        if (Number.isInteger(req.session.numerpokoju))
            res.json(bazadanych[req.session.numerpokoju])
        else
            res.redirect("/")
    })
}