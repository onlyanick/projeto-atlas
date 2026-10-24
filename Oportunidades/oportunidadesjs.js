// Anos escolares em ordem, usados pelo filtro de "Ano escolar".
// Oportunidades sem o campo "anos" são abertas a qualquer ano.
const ORDEM_ANOS = ["7EF", "8EF", "9EF", "1EM", "2EM", "3EM", "UNI"];
const anos = (de, ate = "3EM") =>
  ORDEM_ANOS.slice(ORDEM_ANOS.indexOf(de), ORDEM_ANOS.indexOf(ate) + 1);

const opportunities = [
  {
    id: "instituto-ponte",
    name: "Instituto Ponte",
    tags: ["7º EF+", "Orientação", "Bolsa de estudos"],
    anos: anos("7EF"),
    description:
      "ONG que desenvolve estudantes talentosos por meio da educação, oferecendo bolsas em escolas particulares e acompanhamento pedagógico.",
    site: "https://www.institutoponte.org.br/",
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
    anos: ["3EM"],
    disclaimers: ["Inglês necessário"],
    description:
      "Rede de orientação para alunos internacionais estudarem nos Estados Unidos.",
    site: "https://educationusa.org.br/institucional/oportunidades-academicas/programa-oportunidades-academicas-undergrad/",
  },
  {
    id: "escola-de-talentos",
    name: "Escola de Talentos - Instituto Principia",
    tags: ["1º EM", "Pesquisa científica"],
    anos: ["1EM"],
    description:
      "Programa de estudos de ciências avançadas com pesquisa orientada por professores doutores.",
    site: "https://www.institutoprincipia.org/escola-de-talentos",
  },
  {
    id: "freecodecamp",
    name: "freeCodeCamp",
    tags: ["Cursos", "Programação"],
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
    id: "futuras-cientistas",
    name: "Futuras Cientistas",
    tags: ["Pesquisa científica", "2° ano", "3° ano"],
    anos: ["2EM", "3EM"],
    description:
      "O programa que conecta alunas do ensino médio à pesquisa científica por meio de experiências práticas, mentoria e formação cidadã.",
    site: "https://www.futurascientistas.com.br/",
  },
  {
    id: "inspire",
    name: "Inspire - Instituto Selma Paschini",
    tags: ["Orientação", "Moradia", "Pré-universitárias", "Universitárias"],
    anos: ["3EM", "UNI"],
    description:
      "Instituto que fornece suporte para alunas que desejam fazer faculdade em São Paulo, como moradia e programas de desenvolvimento pessoal.",
    site: "https://ispbrasil.org/",
  },
  {
    id: "ismart",
    name: "Ismart",
    tags: ["Orientação", "Bolsa de estudos", "7° EF", "8° EF", "9° EF"],
    anos: anos("7EF", "9EF"),
    description:
      "Projeto que oferece bolsas em escolas particulares, além de acesso a programas de desenvolvimento e orientação profissional para jovens talentos.",
    site: "https://ismart.org.br/",
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
    id: "lala",
    name: "Latin America Leadership Academy",
    tags: ["Internacional", "Orientação", "Curso de Férias"],
    description:
      "Acampamentos de liderança que reúnem jovens líderes de toda a américa latina.",
    site: "https://latinamericanleadershipacademy.org/pt/",
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
    id: "neps-academy",
    name: "Neps Academy",
    tags: ["Olimpíadas", "Programação"],
    description:
      "Plataforma com cursos de programação do iniciante ao avançado, incluindo programação para olimpíadas e inteligência artificial.",
    site: "https://neps.academy/br",
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
    id: "poti",
    name: "Polos Olímpicos de Treinamento Intensivo",
    tags: ["Cursos", "Olimpíadas"],
    description:
      "Aulas e material didático voltados para olimpíadas de matemática mais avançadas.",
    site: "https://poti.impa.br/",
  },
  {
    id: "peti",
    name: "Programa Especial de Treinamento Internacional",
    tags: ["8º EF+", "Cursos", "Olimpíadas"],
    anos: anos("8EF"),
    description:
      "Curso intensivo de formação da OBM, com 20 horas semanais de aulas de matemática avançada.",
    site: "https://www.obm.org.br/peti-obm/",
  },
  {
    id: "prep-program",
    name: "Prep Program - Fundação Estudar",
    tags: ["Internacional", "Orientação", "2º EM", "3º EM"],
    anos: ["2EM", "3EM"],
    disclaimers: ["Inglês necessário"],
    description:
      "Oferece orientação personalizada para alunos do ensino médio irem para faculdades no exterior.",
    site: "https://www.estudarfora.org.br/prep-program/",
  },
  {
    id: "gauss",
    name: "Projeto Gauss",
    tags: ["Orientação", "Bolsa de estudos", "1º EM", "3º EM"],
    anos: ["1EM", "3EM"],
    description:
      "Projeto que promove educação de qualidade para jovens talentosos em situação de vulnerabilidade social.",
    site: "https://projetogauss.org/",
  },
  {
    id: "behring-academy",
    name: "Sprint Behring Academy",
    tags: ["Cursos", "Orientação", "8° EF+"],
    anos: anos("8EF"),
    description:
      "Programa de formação em tecnologia e a porta de entrada para a Behring Academy.",
    site: "https://behring.academy/",
  },
  {
    id: "uwc",
    name: "United World Colleges",
    tags: ["1º EM", "2º EM", "Internacional", "Bolsa de estudos"],
    anos: ["1EM", "2EM"],
    description:
      "Programas de 2 anos em vários países voltados para promover paz, entendimento intercultural e liderança.",
    site: "https://br.uwc.org/",
  },
  {
    id: "yygs",
    name: "Yale Young Global Scholars",
    tags: ["Internacional", "Curso de Férias", "1º EM", "2º EM"],
    anos: ["1EM", "2EM"],
    disclaimers: ["Inglês necessário"],
    description:
      "Curso de férias de Yale que reúne estudantes de todo o mundo por duas semanas na universidade.",
    site: "https://globalscholars.yale.edu/",
  },
];

const container = document.getElementById("cards-container");

// Remove acentos, deixa minúsculo e troca espaços por hífen: "Curso de Férias" -> "curso-de-ferias"
const slug = (texto) =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

const exigeIngles = (o) =>
  (o.disclaimers ?? []).some((d) => slug(d).includes("ingles"));

function cardHTML({ id, name, tags, disclaimers, description }) {
  return `<article class="card"><a href="/Oportunidades/${id}.html">
    <img src="/0Imagens/${id}-logo.png" alt="">
    <h3>${name}</h3>
    ${tags.map((tag) => `<p class="summary">${tag}</p>`).join(" ")}
    ${(disclaimers ?? []).map((disclaimer) => `<p class="disclaimer">${disclaimer}</p>`).join(" ")}
    <p>${description}</p></a>
    </article>`;
}

if (container) {
  const dropAno = document.getElementById("ano");
  const dropTipo = document.getElementById("tipo");
  const btnPortugues = document.getElementById("so-portugues");
  const resultado = document.getElementById("resultado");

  const dropdowns = [
    { el: dropAno, vazio: "Todos os anos", plural: "anos" },
    { el: dropTipo, vazio: "Todos os tipos", plural: "tipos" },
  ];

  const selecionados = (el) =>
    [...el.querySelectorAll("input:checked")].map((i) => i.value);

  // Texto do botão: "Todos...", o nome da opção, ou "N ... selecionados"
  function atualizarResumo({ el, vazio, plural }) {
    const marcados = [...el.querySelectorAll("input:checked")];
    el.querySelector("summary").textContent =
      marcados.length === 0
        ? vazio
        : marcados.length === 1
          ? marcados[0].parentElement.textContent.trim()
          : `${marcados.length} ${plural} selecionados`;
  }

  function renderCards() {
    const anosSel = selecionados(dropAno);
    const tiposSel = selecionados(dropTipo);
    const soPortugues = btnPortugues.getAttribute("aria-pressed") === "true";

    // Dentro de cada filtro vale "qualquer um dos selecionados" (OU);
    // entre filtros diferentes todos precisam ser atendidos (E).
    const filtradas = opportunities.filter((o) => {
      // sem "anos" = aberta a qualquer ano
      if (anosSel.length && o.anos && !o.anos.some((a) => anosSel.includes(a)))
        return false;
      if (tiposSel.length && !o.tags.some((tag) => tiposSel.includes(slug(tag))))
        return false;
      if (soPortugues && exigeIngles(o)) return false;
      return true;
    });

    container.innerHTML = filtradas.map(cardHTML).join("");

    resultado.textContent =
      filtradas.length === 0
        ? "Nenhuma oportunidade encontrada. Tente mudar ou remover algum filtro."
        : `${filtradas.length} ${filtradas.length === 1 ? "oportunidade encontrada" : "oportunidades encontradas"}`;
  }

  dropdowns.forEach((d) => {
    d.el.addEventListener("change", () => {
      atualizarResumo(d);
      renderCards();
    });
    // abrir um dropdown fecha o outro
    d.el.addEventListener("toggle", () => {
      if (d.el.open)
        dropdowns.forEach((o) => o.el !== d.el && (o.el.open = false));
    });
  });

  // clicar fora ou apertar Esc fecha os dropdowns
  document.addEventListener("click", (e) => {
    dropdowns.forEach(({ el }) => {
      if (!el.contains(e.target)) el.open = false;
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    dropdowns.forEach(({ el }) => {
      if (el.open) {
        el.open = false;
        el.querySelector("summary").focus();
      }
    });
  });

  btnPortugues.addEventListener("click", () => {
    const ativo = btnPortugues.getAttribute("aria-pressed") === "true";
    btnPortugues.setAttribute("aria-pressed", String(!ativo));
    renderCards();
  });

  dropdowns.forEach(atualizarResumo);
  renderCards();
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
