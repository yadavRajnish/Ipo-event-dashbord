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





// const toggleBtn = document.getElementById("toggleBtn");
// const closeBtn = document.getElementById("closeBtn");

// toggleBtn.addEventListener("click", function(){
//   alert("clicked")
//   sidebar.style.width = "64px";
// })

// closeBtn.addEventListener("click", function(){
//   sidebar.style.width = "0px";
// })

// const logWindowSize = () => {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   console.log("Width:", width, "Height:", height);
// };

// logWindowSize();
// window.addEventListener("resize", logWindowSize);


// const toggleSidebar = () => {
//   sidebar.style.width = "64px";
// };

// toggleBtn.addEventListener("click", toggleSidebar);
// closeBtn.addEventListener("click", toggleSidebar);