//the modal and overlay
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const cancel = document.querySelector("#cancel")

function toggleModal() {
    modal.classList.toggle("active")
    overlay.classList.toggle("active")
}

function reset(form) {
    form.reset()
    readValue = true
    read.classList.remove("active")
    read.textContent = "Read"
}

overlay.addEventListener("click", () => {
    reset(form)
    toggleModal();
})

cancel.addEventListener("click", () => {
    toggleModal();
    reset(form)
})

//opening Modal
const mbtn = document.querySelector("#openModal")
mbtn.addEventListener("click", () => {
    toggleModal()
})

const body = document.querySelector("html")
body.addEventListener("keydown", (key) => {
    if(key.key == "Escape"){
        modal.classList.remove("active")
        overlay.classList.remove("active")
    }
})


//the form button
const read = document.querySelector("#read");
let readValue = true;
read.addEventListener("click", () => {
    if(readValue) {
        read.textContent = "not Read"
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
        toggleModal()
    } else {
        alert("You have to fill in the form")
    }
    clearAll()
    display(libary)
    reset(form)
})

//card functions
function remove(element) {
    element.closest(".card").remove()
}

function readState(element) {
    element.classList.toggle("active")
    if (Array.from(element.classList).indexOf("active") == -1) {
        element.textContent = "Read"
    } else {
        element.textContent = "not Read"
    }
}


//displaying the libary
const cards = document.querySelector(".cards")

function clearAll() {
    const all_cards = document.querySelectorAll(".card")
    Array.from(all_cards).forEach(card => {
        remove(card)
    })
}

function display(array) {
    let count = 0
    array.forEach(book => {
        const card = document.createElement("div")
        card.classList.add("card")

        const info = document.createElement("div")
        info.classList.add("info")

        const title = document.createElement("h2")
        title.classList.add("title")
        title.textContent = book.title
        info.appendChild(title)

        const author = document.createElement("h3")
        author.textContent = book.author
        info.appendChild(author)

        const pages = document.createElement("h3")
        pages.textContent = book.pages
        info.appendChild(pages)

        const btn = document.createElement("button")
        btn.classList.add("read")
        if(book.read == false) {
            btn.classList.add("active")
            btn.textContent = "not Read"
        } else {
            btn.textContent = "Read"
        }
        btn.onclick = function() {
            readState(this)
        }
        info.appendChild(btn)

        card.appendChild(info)
        cards.appendChild(card)

        const rem = document.createElement("div")
        rem.classList.add("remove")

        const remBtn = document.createElement("button")
        remBtn.classList.add("rem")
        remBtn.textContent = "Remove"
        remBtn.onclick = function() {
            remove(card)
            libary.splice(btn.id, 1)
        }
        remBtn.id = count
        rem.appendChild(remBtn)

        card.appendChild(rem)
        count++
    });
}
