document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModal");
    const deleteModal = document.getElementById("deleteModal");
    const closeModalBtn = document.getElementById("closeModal");
    const cancelDeleteBtn = document.getElementById("cancelDelete");
    const confirmDeleteBtn = document.getElementById("confirmDelete");

    // Open Modal
    openModalBtn.addEventListener("click", function () {
        deleteModal.classList.remove("hidden");
    });

    // Close Modal
    function closeModal() {
        deleteModal.classList.add("hidden");
    }

    closeModalBtn.addEventListener("click", closeModal);
    cancelDeleteBtn.addEventListener("click", closeModal);

    // Confirm Delete Action
    confirmDeleteBtn.addEventListener("click", function () {
        // alert("Event deleted successfully!");
        closeModal();
    });
});