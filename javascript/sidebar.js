const sidebar = document.getElementById("sidebar");
const navTabs = document.querySelectorAll(".navTab");
const contentOverlay = document.getElementById("contentOverlay");

sidebar.addEventListener("mouseover", function () {
  sidebar.style.width = "200px";
  navTabs.forEach(tab => tab.classList.remove("hidden"));
  //   contentOverlay.classList.remove("hidden")
  contentOverlay.classList.remove("opacity-0");
  contentOverlay.classList.add("opacity-100", "pointer-events-auto");
});

sidebar.addEventListener("mouseout", function () {
  sidebar.style.width = "64px";
  navTabs.forEach(tab => tab.classList.add("hidden"));
  //   contentOverlay.classList.add("hidden")
  contentOverlay.classList.remove("opacity-100", "pointer-events-auto");
  contentOverlay.classList.add("opacity-0");
});
