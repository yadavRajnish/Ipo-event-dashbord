document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("changePasswordModal");
    const closeModalBtn = document.getElementById("closeChangePasswordModal");
    const openModalBtns = document.querySelectorAll("#openChangePasswordModal"); // Select all occurrences
    const toggleSubmenu = document.getElementById("toggleSubmenu");
    const submenu = document.getElementById("submenu");
    const mobileSidebar = document.getElementById("mobile_sidebar");
    const contentOverlay = document.getElementById("contentOverlay");
    const navTabs = document.querySelectorAll(".navTab");

    if (!modal || !closeModalBtn || openModalBtns.length === 0) {
        console.warn("Modal or buttons not found!");
        return;
    }

    // Function to close the sidebar
    function closeSidebarMenu() {
        if (mobileSidebar) {
            mobileSidebar.style.width = "0px";
        }
        navTabs.forEach(tab => tab.classList.add("hidden"));
        contentOverlay.classList.remove("opacity-100", "pointer-events-auto");
        contentOverlay.classList.add("opacity-0");
    }

    // Open modal on click for both large and small screen versions
    openModalBtns.forEach((btn) => {
        btn.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent bubbling
            console.log("Change Password clicked");

            // Close sidebar first
            closeSidebarMenu();

            // Then open modal
            modal.classList.remove("hidden");
        });

        // Add support for touch on mobile
        btn.addEventListener("touchstart", function (event) {
            event.stopPropagation();
            closeSidebarMenu();
            modal.classList.remove("hidden");
        });
    });

    // Toggle submenu visibility
    toggleSubmenu.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent page reload
        event.stopPropagation(); // Prevent sidebar from closing when clicking "Settings"
        
        submenu.classList.toggle("hidden");
    });

    // Close modal when clicking the close button
    closeModalBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        modal.classList.add("hidden");
    });

    // Close modal when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });
});
