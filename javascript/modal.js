const openModal = document.getElementById("openModal");
const registerModal = document.getElementById("registerModal");
const cancelButton = document.getElementById("cancelButton");
const createButton = document.getElementById("createButton");

function showModal() {
    registerModal.classList.remove("hidden");
    setTimeout(() => {
        registerModal.classList.remove("opacity-0");
        registerModal.classList.add("opacity-100");
    }, 10);
}

function hideModal() {
    registerModal.classList.remove("opacity-100");
    registerModal.classList.add("opacity-0");

    setTimeout(() => {
        registerModal.classList.add("hidden");
    }, 300); 
}

openModal.addEventListener("click", showModal);
cancelButton.addEventListener("click", hideModal);
createButton.addEventListener("click", hideModal);

// Close modal when clicking outside
window.addEventListener("click", function (event) {
    if (event.target === registerModal) {
        hideModal();
    }
});