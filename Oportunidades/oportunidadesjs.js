const opportunities = [
  {
    id: "instituto-ponte",
    name: "Instituto Ponte",
    tags: ["7º EF+", "Orientação", "Bolsa de estudos"],
    description:
      "ONG que desenvolve estudantes talentosos por meio da educação, oferecendo bolsas em escolas particulares e acompanhamento pedagógico.",
    site: "https://www.institutoponte.org.br/",
  },
  {
    id: "prep-program",
    name: "Fundação Estudar - Prep Program",
    tags: ["Internacional", "Orientação", "2º EM", "3º EM"],
    disclaimers: ["Inglês necessário"],
    description:
      "Oferece orientação personalizada para alunos do ensino médio irem para faculdades no exterior.",
    site: "https://www.estudar.org.br/prep-program/",
  },
  {
    id: "uwc",
    name: "United World Colleges",
    tags: ["1º EM", "2º EM", "Internacional", "Bolsa de estudos"],
    description:
      "Programas de 2 anos em vários países voltados para promover paz, entendimento intercultural e liderança.",
    site: "https://br.uwc.org/",
  },
  {
    id: "bbc-english-courses",
    name: "BBC English Courses",
    tags: ["Cursos"],
    description:
      "Cursos e materiais gratuitos da BBC para aprender inglês com vídeos, áudios, gramática e exercícios.",
    site: "https://www.bbc.co.uk/learningenglish/",
  },
  {
    id: "educationusa",
    name: "EducationUSA",
    tags: ["Internacional", "Orientação", "3º EM"],
    disclaimers: ["Inglês necessário"],
    description:
      "Rede de orientação para alunos internacionais estudarem nos Estados Unidos.",
    site: "https://educationusa.org.br/institucional/oportunidades-academicas/programa-oportunidades-academicas-undergrad/",
  },
  {
    id: "freecodecamp",
    name: "freeCodeCamp",
    tags: ["Cursos"],
    description:
      "Lições gratuitas de programação em vários formatos, do básico ao Full-Stack.",
    site: "https://www.freecodecamp.org/portuguese/",
  },
  {
    id: "fsi-language-courses",
    name: "FSI Language Courses",
    tags: ["Cursos"],
    disclaimers: ["Conteúdo em inglês"],
    description:
      "Acervo de cursos de idiomas utilizado por diplomatas americanos.",
    site: "https://www.fsi-language-courses.org/",
  },
  {
    id: "khan-academy",
    name: "Khan Academy",
    tags: ["Cursos"],
    description:
      "Plataforma educacional que oferece aulas e exercícios para aprender assuntos escolares e de outras áreas.",
    site: "https://pt.khanacademy.org/",
  },
  {
    id: "poti",
    name: "Polos Olímpicos de Treinamento Intensivo",
    tags: ["Cursos", "Olimpíadas"],
    description:
      "Aulas e material didático voltados para olimpíadas de matemática mais avançadas.",
    site: "https://poti.impa.br/",
  },
  {
    id: "mit-ocw",
    name: "MIT OpenCourseWare",
    tags: ["Cursos"],
    disclaimers: ["Conteúdo em inglês"],
    description:
      "Plataforma do MIT com aulas, apostilas e materiais gratuitos dos cursos da universidade em diversas áreas.",
    site: "https://ocw.mit.edu/",
  },
  {
    id: "peti",
    name: "Programa Especial de Treinamento Internacional",
    tags: ["8º EF+", "Olimpíadas"],
    description:
      "Curso intensivo de formação da OBM, com 20 horas semanais de aulas de matemática avançada.",
    site: "https://www.obm.org.br/peti-obm/",
  },
  {
    id: "noic",
    name: "Núcleo Olímpico de Incentivo ao Conhecimento",
    tags: ["Olimpíadas"],
    description:
      "Iniciativa sem fins lucrativos com o objetivo de preparar estudantes para olimpíadas científicas.",
    site: "https://noic.com.br/",
  },
  {
    id: "escola-de-talentos",
    name: "Escola de Talentos - Instituto Principia",
    tags: ["1º EM", "Orientação"],
    description:
      "Programa de estudos de ciências avançadas com pesquisa orientada por professores doutores.",
    site: "https://www.institutoprincipia.org/escola-de-talentos",
  },
  {
    id: "inspire",
    name: "Inspire - Instituto Selma Paschine",
    tags: ["Orientação", "Bolsas de estudos"],
    description:
      "Instituto que fornece suporte para alunas que desejam fazer faculdade em São Paulo, como auxílio moradia e programas de desenvolvimento pessoal.",
    site: "https://ispbrasil.org/",
  },
];

const container = document.getElementById("cards-container");

if (container) {
  opportunities.forEach(({ id, name, tags, disclaimers, description }) => {
    container.innerHTML += `<article class="card"><a href="Oportunidades/${id}.html">
    <img src="0Imagens/${id}-logo.png" alt="">
    <h3>${name}</h3>
    ${tags.map((tag) => `<p class="summary">${tag}</p>`).join(" ")}
    ${(disclaimers ?? []).map((disclaimer) => `<p class="disclaimer">${disclaimer}</p>`).join(" ")}
    <p>${description}</p></a>
    </article>`;
  });
}

const banner = document.getElementById("banner");
const tab = window.location.pathname
  .split("/")
  .pop()
  .split("#")[0]
  .replace(".html", "");
const obj = opportunities.find((o) => o.id === tab);

if (banner && obj) {
  document.title = `${obj.name} - Projeto Atlas`;
  banner.innerHTML += `<div class="innerBanner">
    <div class="bannerInfo">
      <h2>${obj.name}</h2>
      ${obj.tags.map((tag) => `<p class="bannerTag">${tag}</p>`).join(" ")}
      <a href="${obj.site}" target="_blank">Acesse o site</a>
      <p>${obj.description}</p>
    </div>
    <img src="../0Imagens/${obj.id}-logo.png" alt="">
  </div>`;
}

let tabSct = document.getElementById(window.location.hash.replace("#", ""));
let sctLink = document.getElementById(
  window.location.hash.replace("#", "") + "Link",
);

function switchTab() {
  if (!tabSct) {
    tabSct = document.getElementById("sct1");
    sctLink = document.getElementById("sct1Link");
    tabSct.classList.toggle("openSct");
    sctLink.classList.toggle("openLink");
  } else {
    tabSct.classList.remove("openSct");
    tabSct = document.getElementById(window.location.hash.replace("#", ""));
    tabSct.classList.toggle("openSct");
    sctLink.classList.remove("openLink");
    sctLink = document.getElementById(
      window.location.hash.replace("#", "") + "Link",
    );
    sctLink.classList.toggle("openLink");
  }
}

window.addEventListener("hashchange", switchTab);

window.addEventListener("load", switchTab);
