document.addEventListener("DOMContentLoaded", function () {
    const selectAllCheckbox = document.getElementById("selectAll");
    const rowCheckboxes = document.querySelectorAll(".rowCheckbox");

    selectAllCheckbox.addEventListener("change", function () {
        rowCheckboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;
        });
    });

    rowCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            if (!this.checked) {
                selectAllCheckbox.checked = false;
            } else if ([...rowCheckboxes].every(cb => cb.checked)) {
                selectAllCheckbox.checked = true;
            }
        });
    });
});