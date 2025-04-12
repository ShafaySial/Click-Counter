let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("entries")


let count = 0
console.log(count)

function countbtn() {
    count += 1 
    countEl.textContent = count
    console.log(count)
}

let dash = " - "
function save() {
    let countStr = count + dash
    saveEl.textContent += countStr
    console.log(countStr)
}
function reset() {
    count = 0
    countEl.textContent = 0
    console.log(count)

}



