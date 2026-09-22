const articles = [
  {
    name: "Por que competir em Olimpíadas Científicas?",
    tags: ["Artigos"],
    description:
      "Qual o propósito de participar de algo que não se converte em notas?",
  },
];

const container = document.getElementById("articles-container");

if (container) {
  articles.forEach(({ name, tags, description }) => {
    container.innerHTML += `<a href="/Artigos/${name.toLowerCase().replaceAll("?", "").replaceAll(" ", "-")}.html">
    <article class="article">
    <img src="0Imagens/${name.toLowerCase().replaceAll(" ", "-").replaceAll("?", "")}-banner.png" alt="">
    <div class="article-text-content">
    ${tags.map((tag) => `<p class="summary">${tag}</p>`).join(" ")}
    <h3>${name}</h3>
    <p>${description}</p>
    </div>
    </article>
    </a>`;
  });
}
