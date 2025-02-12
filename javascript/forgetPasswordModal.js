document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("changePasswordModal");
    const openModalBtn = document.getElementById("openChangePasswordModal");
    const closeModalBtn = document.getElementById("closeChangePasswordModal");

    // Open Modal
    openModalBtn.addEventListener("click", function () {
        modal.classList.remove("hidden");
    });

    // Close Modal
    closeModalBtn.addEventListener("click", function () {
        modal.classList.add("hidden");
    });

    // Close when clicking outside the modal
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });

    // Toggle Password Visibility
    document.querySelectorAll(".togglePassword").forEach((icon) => {
        icon.addEventListener("click", function () {
            let input = this.previousElementSibling;
            input.type = input.type === "password" ? "text" : "password";
        });
    });
});
