const sidebar = document.getElementById("sidebar");
const closebtn = document.getElementById("closebtn");
const openbtn = document.getElementById("openbtn");

function isMobile() {
  return window.innerWidth <= 768;
}

openbtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  openbtn.style.display = "none";
  closebtn.style.display = "block";
});

closebtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
  openbtn.style.display = "block";
  closebtn.style.display = "none";
});

sidebar.addEventListener("mouseleave", () => {
  if (!isMobile()) {
    sidebar.classList.remove("open");
    openbtn.style.display = "block";
    closebtn.style.display = "none";
  }
});

sidebar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (isMobile()) {
      sidebar.classList.remove("open");
      openbtn.style.display = "block";
      closebtn.style.display = "none";
    }
  });
});

function insertTemplate(template) {
  if (document.getElementById(template)) {
    fetch(`${template}.html`).then((response) =>
      response
        .text()
        .then((data) => (document.getElementById(template).innerHTML = data)),
    );
  }
}
