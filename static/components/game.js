import user from "./lobby.js"
console.log("game.js")
const game = {
    syncusers() {
        console.log("game.js")
        fetch('/users')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                document.querySelector(".users").innerHTML = ""
                data.users.forEach(element => {
                    new user(element.nickname, element.color).createuser()
                })
            })
    }
}
game.syncusers()
setInterval(game.syncusers, 3000)