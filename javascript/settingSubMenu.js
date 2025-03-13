document
  .getElementById("settingsTab")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("submenu").classList.toggle("hidden");
  });
