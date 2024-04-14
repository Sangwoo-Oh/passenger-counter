// adding event listener
let incrementButton = document.getElementById("increment-btn")

let saveButton = document.getElementById("save-btn").addEventListener("click", save)
let countEl = document.getElementById("count")
let saveEl = document.getElementById("save-el")

let count = 0
// function increment()
// {
//     countEl.textContent = ++count
// }

// using lambda function
incrementButton.addEventListener("click", () => {countEl.textContent = ++count})

function save()
{
    saveEl.textContent += count + " - "
    count = 0
    countEl.textContent = count
}

