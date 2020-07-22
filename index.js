let expanded = false;

let menu = document.getElementById("menu");

let collapse = document.querySelector(".collapse");

menu.onclick = () => {
  if (expanded) {
    collapse.style.display = "none";
    expanded = false;
  } else {
    collapse.style.display = "block";
    expanded = true;
  }
};
