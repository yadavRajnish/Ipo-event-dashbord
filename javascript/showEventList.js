document.addEventListener("DOMContentLoaded", function () {
  const showEventsModal = document.getElementById("showEventsModal");
  const showEventsList = document.getElementById("showEventsList");

  showEventsModal.addEventListener("click", function (event) {
    // showEventsList.classList.remove("hidden");
    showEventsList.classList.toggle("hidden");
    event.stopPropagation();
  });

  window.addEventListener("click", function (event) {
    if (
      !showEventsModal.contains(event.target) &&
      !showEventsList.contains(event.target)
    ) {
      showEventsList.classList.add("hidden");
    }
  });
});
