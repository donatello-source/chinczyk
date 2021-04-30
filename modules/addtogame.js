const bazadanych = require("./bazadanych.js")
const kolory = ["red", "blue", "green", "yellow"]
var uuid = 1
var ses = 1
module.exports = function (data) {
    console.log(data)
    if (bazadanych.length !== 0) {
        if (bazadanych[bazadanych.length - 1].liczbagraczy < 4) {
            bazadanych[bazadanych.length - 1].users.push({ nickname: data, status: false, id: uuid + "_" + ses, color: kolory[bazadanych[bazadanych.length - 1].liczbagraczy] })
            bazadanych[bazadanych.length - 1].liczbagraczy++
            uuid++
            return [bazadanych.length - 1, bazadanych[bazadanych.length - 1].liczbagraczy - 1]
        } else {
            uuid = 1
            ses++
            bazadanych.push({ liczbagraczy: 1, users: [{ nickname: data, status: false, id: uuid + "_" + ses, color: kolory[bazadanych[bazadanych.length - 1].liczbagraczy] }] })
            uuid++
            return bazadanych.length - 1
        }
    } else {
        console.log("elo2")
        bazadanych.push({ liczbagraczy: 1, users: [{ nickname: data, status: false, id: uuid + "_" + ses, color: kolory[0] }] })
        uuid++
        return [0, 0]
    }
}
