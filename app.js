const hp1 = document.querySelector(".hp1")
const hp2 = document.querySelector(".hp2")
const button1 = document.querySelector(".p1")
const button2 = document.querySelector(".p2")
const reset = document.querySelector(".reset")
const selector = document.querySelector(".selector")
let winNum = 0
let score1 = 0
let score2 = 0

selector.addEventListener("change", function(e){
    winNum = Number(e.target.value)
    selector.disabled = true
    button1.disabled = false
    button2.disabled = false
    reset.disabled = false
})

button1.addEventListener("click", function() {
    score1++
    hp1.innerText = score1
    if ((score1 >= winNum) && score1 - score2 >= 2)  {
        button1.disabled = true
        button2.disabled = true
        hp1.style.color = "green"
        hp2.style.color = "red"
    }
})

button2.addEventListener("click", function() {
    score2++
    hp2.innerText = score2
    if ((score2 >= winNum) && score2 - score1 >= 2) {
        button1.disabled = true
        button2.disabled = true
        hp2.style.color = "green"
        hp1.style.color = "red"
    }
})

reset.addEventListener("click", function() {
    score1 = 0
    score2 = 0
    selector.selectedIndex = 0
    hp1.innerText = score1
    hp2.innerText = score2
    hp1.style.color = "black"
    hp2.style.color = "black"
    selector.disabled = false
    button1.disabled = true
    button2.disabled = true
    reset.disabled = true
})

