//the modal and overlay
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const cancel = document.querySelector("#cancel")

function toggleModal() {
    modal.classList.toggle("active")
    overlay.classList.toggle("active")
}

overlay.addEventListener("click", () => {
    toggleModal();
})

cancel.addEventListener("click", () => {
    toggleModal();
})


//the form button
const read = document.querySelector("#read");
let readValue = true;
read.addEventListener("click", () => {
    if(readValue) {
        read.textContent = "Not read"
        readValue = false;
    } else {
        read.textContent = "Read"
        readValue = true
    }

    read.classList.toggle("active")
})


//the books
function getFormData() {
    const title = document.querySelector("#title")
    const author = document.querySelector("#author")
    const pages = document.querySelector("#pages")

    return [title.value, author.value, pages.value]
}


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

let libary = []
const form = document.querySelector(".form")
const add = document.querySelector("#add")
add.addEventListener("click", (event) => {
    event.preventDefault()
    const values = getFormData()
    const read = readValue
    if(values.indexOf("") == -1) {
        libary.push(new Book(values[0], values[1], values[2], read))
    } else {
        alert("You have to fill in the form")
    }
    form.reset()
})
