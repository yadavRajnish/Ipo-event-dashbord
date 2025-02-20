const dropdownInput = document.getElementById("dropdownInput");
const dropdownMenu = document.getElementById("dropdownMenu");
const selectedOptions = document.getElementById("selectedOptions");
let selectedList = [];
const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

function populateDropdown() {
  dropdownMenu.innerHTML = "";
  options.forEach(option => {
    const li = document.createElement("li");
    li.className = "dropdown-li";
    li.textContent = option;
    li.onclick = () => selectOption(option);
    dropdownMenu.appendChild(li);
  });
}

dropdownInput.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

function selectOption(option) {
  if (!selectedList.includes(option)) {
    selectedList.push(option);
    updateSelectedOptions();
  }
  dropdownMenu.classList.add("hidden");
}

function updateSelectedOptions() {
  selectedOptions.innerHTML = "";
  const displayedOptions = selectedList.slice(0, 2);
  displayedOptions.forEach(text => {
    const span = document.createElement("span");
    span.className = "selected-option";
    span.innerHTML = `${text} <button onclick="removeOption('${text}')" class="close-button">X</button>`;
    selectedOptions.appendChild(span);
  });

  if (selectedList.length > 2) {
    const moreSpan = document.createElement("span");
    moreSpan.className = "options-conter";
    moreSpan.textContent = `+${selectedList.length - 2}`;
    selectedOptions.appendChild(moreSpan);
  }
}

function removeOption(text) {
  selectedList = selectedList.filter(option => option !== text);
  updateSelectedOptions();
}

document.addEventListener("click", event => {
  if (
    !dropdownInput.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.add("hidden");
  }
});

populateDropdown();
