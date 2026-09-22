const articles = [
  {
    name: "Por que participar em Olimpíadas Científicas?",
    tags: ["Oportunidade"],
    description:
      "Confira a principal olimpíada de matemática do Brasil, porta de entrada para matemática olímpica.",
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

