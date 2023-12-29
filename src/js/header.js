const body = document.querySelector("body")
const p = document.querySelector("p")
const a = document.querySelector("a")
const li = document.querySelector("li")
const main = document.querySelector("main")
const footer = document.querySelector("footer")
const header = document.querySelector("header")
const inputDarkmodeToggle = document.querySelector(".input-darkmode-toggle")
const modalContentHeader = document.querySelector(".modal-content-header")
const buttonsss = document.querySelectorAll("button")
const hTwos = document.querySelectorAll("h2")
const pTexts = document.querySelectorAll("p")
const aTexts = document.querySelectorAll("a")
const modalFooter = document.querySelector(".modal")
inputDarkmodeToggle.addEventListener("click", () => {
        footer.classList.toggle("dark-theme");
        main.classList.toggle("dark-theme");
        header.classList.toggle("dark-theme");
        modalContentHeader.classList.toggle("dark-theme");
        modalFooter.classList.toggle("dark-theme");
        for (let button of buttonsss) {
            button.classList.toggle("dark-theme")
        }
        for (let hTwo of hTwos) {
            hTwo.classList.toggle("dark-theme")
        }
        for (const pText of pTexts) {
            pText.classList.toggle("dark-theme")
        }
        for (const aText of aTexts) {
            aText.classList.toggle("dark-theme")
        }
})

    const modalLink = document.querySelector('.modal-link');
    const modalHeader = document.getElementById('modal-header');
    const closeModalHeader = document.querySelector('.close-modal-header');
    const closeButtonModal = document.querySelector(".button-modal-header")

    modalLink.addEventListener('click', showModal);

    closeModalHeader.addEventListener('click', closeModal);

    closeButtonModal.addEventListener('click', closeModal);

  function closeModal() {
    modalHeader.style.visibility = 'hidden';
}
function showModal() {
    modalHeader.style.visibility = 'visible';
};

function showName() {

    const enteredName = document.querySelector(".input-modal-header").value;

    modalLink.innerHTML = "Вітаємо " + enteredName;
}
closeButtonModal.addEventListener("click", showName)
