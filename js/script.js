let theme = localStorage.getItem("theme");
let themeDots = document.getElementsByClassName("theme-dot");

if (theme == null) {
  changeTheme("light");
} else {
  changeTheme(theme);
}
for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", (e) => {
    let switchMode = themeDots[i].getAttribute("id");
    changeTheme(switchMode);
  });
}

function changeTheme(mode) {
  if (mode == "dark-mode") {
    document.getElementById("theme-style").href = "css/dark.css";
    document.getElementById("light-mode").classList.remove("active");
    document.getElementById("dark-mode").classList.add("active");
  } else {
    document.getElementById("theme-style").href = "";
    document.getElementById("dark-mode").classList.remove("active");
    document.getElementById("light-mode").classList.add("active");
  }
  localStorage.setItem("theme", mode);
}
