// Configuration
let currentPage = 1;
const totalPages = 20;
const paginationContainer = document.getElementById("pagination");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function renderPagination() {
  paginationContainer.innerHTML = "";
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 4);

  // Ensure we always show at least 5 pages
  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
  }

  // Create page buttons
  for (let i = startPage; i <= endPage; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = `px-1 rounded cursor-pointer ${
      i === currentPage
        ? "bg-gray-300 text-white"
        : "text-gray-500 hover:bg-gray-100"
    }`;
    btn.addEventListener("click", () => changePage(i));
    paginationContainer.appendChild(btn);
  }

  // Add ellipsis if necessary
  if (endPage < totalPages) {
    const ellipsis = document.createElement("span");
    ellipsis.textContent = "...";
    ellipsis.className = "px-1 text-gray-500";
    paginationContainer.appendChild(ellipsis);

    // Last page button
    const lastPageBtn = document.createElement("button");
    lastPageBtn.textContent = totalPages;
    lastPageBtn.className = "px-1 text-gray-500 hover:bg-gray-100";
    lastPageBtn.addEventListener("click", () => changePage(totalPages));
    paginationContainer.appendChild(lastPageBtn);
  }

  // Enable/disable buttons
  prevBtn.classList.toggle("cursor-not-allowed", currentPage === 1);
  nextBtn.classList.toggle("cursor-not-allowed", currentPage === totalPages);
}

function changePage(newPage) {
  if (newPage < 1 || newPage > totalPages) return;
  currentPage = newPage;
  renderPagination();
}

// Get the Jump to Page dropdown
// const jumpToPageDropdown = document.getElementById("jumpToPage");

// jumpToPageDropdown.addEventListener("change", event => {
//   const selectedPage = parseInt(event.target.value, 10);
//   if (!isNaN(selectedPage)) {
//     changePage(selectedPage);
//   }
// });

prevBtn.addEventListener("click", () => changePage(currentPage - 1));
nextBtn.addEventListener("click", () => changePage(currentPage + 1));

// Initial render
renderPagination();
