const modeBtn = document.querySelector("#mode__btn");
const html = document.querySelector("html");

let modeTheme = localStorage.getItem("mode");
if (modeTheme) {
  html.setAttribute("data-theme", "coffee");
  modeBtn.checked = true;
} else {
  html.setAttribute("data-theme", "corporate");
  modeBtn.checked = false;
}

// butonlarni tinglymiz
modeBtn.addEventListener("click", () => {
  if (html.getAttribute("data-theme") === "coffee") {
    html.setAttribute("data-theme", "corporate");
    localStorage.setItem("mode", "");
  } else {
    html.setAttribute("data-theme", "coffee");
    localStorage.setItem("mode", "coffee");
  }
});
