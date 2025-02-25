function showNotification() {
    let notification = document.getElementById("notificationMessage");

    // Remove "hidden" and enable interactions
    notification.classList.remove("hidden", "pointer-events-none");

    setTimeout(() => {
        notification.classList.add("pointer-events-auto"); // Enable click events
        notification.classList.replace("translate-y-2", "translate-y-0");
        notification.classList.replace("opacity-0", "opacity-100");
    }, 50);

    // Auto-close after 3 seconds
    setTimeout(closeNotification, 3000);
}

function closeNotification() {
    let notification = document.getElementById("notificationMessage");

    notification.classList.replace("opacity-100", "opacity-0");
    notification.classList.replace("translate-y-0", "translate-y-2");
    notification.classList.remove("pointer-events-auto"); // Disable interactions

    setTimeout(() => notification.classList.add("hidden", "pointer-events-none"), 300);
}
