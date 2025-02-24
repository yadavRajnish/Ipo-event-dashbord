const statusButtons = document.getElementsByClassName("status-button");

for (let button of statusButtons) {
  if (
    button.innerText.trim().toLowerCase() === "pending" ||
    button.innerText.trim().toLowerCase() === "hold"
  ) {
    button.classList.add("cursor-pointer");
  }
}
