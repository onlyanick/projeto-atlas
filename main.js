function insertTemplate(template) {
  if (document.getElementById(template)) {
    return fetch(`/Templates/${template}.html`).then((response) =>
      response
        .text()
        .then((data) => (document.getElementById(template).innerHTML = data)),
    );
  } else return;
}

insertTemplate("footer");
insertTemplate("header");
insertTemplate("sidebar").then(() => {
  const sidebar = document.getElementById("sidebar");
  const closebtn = document.getElementById("closebtn");
  const openbtn = document.getElementById("openbtn");

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
    sidebar.classList.remove("open");
    openbtn.style.display = "block";
    closebtn.style.display = "none";
  });
});
