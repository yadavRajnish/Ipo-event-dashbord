const notificationIcon = document.getElementById('notification-icon');
const notificationPopup = document.getElementById('notification-popup');

// Toggle notification popup on click
notificationIcon.addEventListener('click', () => {
  // Toggle visibility of the popup
  notificationPopup.classList.toggle('hidden');
});

// Optionally, close the popup when clicked outside
document.addEventListener('click', (event) => {
  if (!notificationIcon.contains(event.target) && !notificationPopup.contains(event.target)) {
    notificationPopup.classList.add('hidden');
  }
});