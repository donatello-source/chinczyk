export default class user {
    constructor(nickname, color) {
        this.nickname = nickname
        this.color = color
        this.element = null
    }
    createuser() {
        this.element = document.createElement("div")
        this.element.innerText = this.nickname
        this.element.style.backgroundColor = this.color
        document.querySelector(".users").appendChild(this.element)
    }

}