// adding event listener
let incrementButton = document.getElementById("increment-btn").addEventListener("click", increment)
let saveButton = document.getElementById("save-btn").addEventListener("click", save)
let countEl = document.getElementById("count")
let saveEl = document.getElementById("save-el")

let count = 0
function increment()
{
    countEl.textContent = ++count
}

function save()
{
    saveEl.textContent += count + " - "
    count = 0
    countEl.textContent = count
}

