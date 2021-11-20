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
