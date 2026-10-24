// Anos escolares em ordem, usados pelo filtro de "Ano escolar".
// Competições sem o campo "anos" são abertas a qualquer ano.
const ORDEM_ANOS = [
  "1EF", "2EF", "3EF", "4EF", "5EF", "6EF", "7EF", "8EF", "9EF",
  "1EM", "2EM", "3EM",
];
const anos = (de, ate = "3EM") =>
  ORDEM_ANOS.slice(ORDEM_ANOS.indexOf(de), ORDEM_ANOS.indexOf(ate) + 1);

const competitions = [
  {
    id: "obmep",
    name: "Olimpíada Brasileira de Matemática das Escolas Públicas",
    tags: ["Matemática", "6° EF+"],
    anos: anos("6EF"),
    disclaimers: ["Inscrição pela escola"],
    description:
      "Principal olimpíada de matemática do Brasil, porta de entrada para matemática olímpica.",
    site: "https://www.obmep.org.br/",
  },
  {
    id: "obm",
    name: "Olimpíada Brasileira de Matemática",
    tags: ["Matemática", "6° EF+"],
    anos: anos("6EF"),
    disclaimers: ["Classificação necessária"],
    description:
      "A mais prestigiada olimpíada de matemática do Brasil e caminho para olimpíadas internacionais.",
    site: "https://www.obm.org.br/",
  },
  {
    id: "obf",
    name: "Olimpíada Brasileira de Física",
    tags: ["Física", "6° EF+"],
    anos: anos("6EF"),
    description:
      "Olimpíada nacional de física que incentiva o estudo da disciplina e prepara estudantes para desafios científicos.",
    site: "https://www.sbfisica.org.br/v1/olimpiada/",
  },
  {
    id: "obfep",
    name: "Olimpíada Brasileira de Física das Escolas Públicas",
    tags: ["Física", "9° EF+"],
    anos: anos("9EF"),
    disclaimers: ["Inscrição pela escola"],
    description:
      "Olimpíada física destinada a alunos da rede pública que busca incentivar o interesse pela física e descobrir talentos.",
    site: "https://www1.fisica.org.br/~obfep/",
  },
  {
    id: "obq",
    name: "Olimpíada Brasileira de Química",
    tags: ["Química", "EM"],
    anos: anos("1EM"),
    disclaimers: ["Classificação necessária"],
    description:
      "Competição nacional de química para estudantes do ensino médio.",
    site: "https://obquimica.org/",
  },
  {
    id: "obqjr",
    name: "Olimpíada Brasileira de Química Júnior",
    tags: ["Química", "EF II"],
    anos: anos("6EF", "9EF"),
    disclaimers: ["Inscrição pela escola"],
    description:
      "Competição nacional de química para estudantes do ensino fundamental.",
    site: "https://obqjr.obquimica.org/",
  },
  {
    id: "quimeninas",
    name: "Quimeninas",
    tags: ["Química", "9° EF+"],
    anos: anos("9EF"),
    description:
      "Olimpíada nacional feminina de química que incentiva a participação de meninas nas ciências e na OBQ.",
    site: "https://obquimica.org/olimpiada/olimpiada-quimeninas",
  },
  {
    id: "onhb",
    name: "Olimpíada Nacional em História do Brasil",
    tags: ["Ciências humanas e sociais", "Em equipe", "7° EF+"],
    anos: anos("7EF"),
    description:
      "Olimpíada nacional de história organizada pela Unicamp, realizada em grupo.",
    site: "https://www.olimpiadadehistoria.com.br/",
  },
  {
    id: "omu",
    name: "Olimpíada de Matemática da Unicamp",
    tags: ["Matemática", "Em equipe", "8° EF+"],
    anos: anos("8EF"),
    description:
      "Olimpíada de matemática organizada pela Unicamp e realizada em grupo.",
    site: "https://www.olimpiada.ime.unicamp.br/",
  },
  {
    id: "obb",
    name: "Olimpíada Brasileira de Biologia",
    tags: ["Biologia", "EM"],
    anos: anos("1EM"),
    disclaimers: ["Inscrição pela escola"],
    description:
      "Competição nacional de biologia para estudantes do ensino médio.",
    site: "https://olimpiadasdebiologia.butantan.gov.br/",
  },
  {
    id: "jacob-palis",
    name: "Competição Jacob Palis Júnior de Matemática",
    tags: ["Matemática", "6° EF+"],
    anos: anos("6EF"),
    disclaimers: ["Inscrição pela escola"],
    description:
      "Olimpíada de matemática classificatória para a OBM e para o Torneio Meninas na Matemática.",
    site: "https://www.obm.org.br/competicao-jacob-palis-junior-de-matematica/",
  },
  {
    id: "tm2",
    name: "Torneio Meninas na Matemática",
    tags: ["Matemática", "6° EF+"],
    anos: anos("6EF"),
    disclaimers: ["Classificação necessária"],
    description:
      "Competição voltada para meninas, incentivando a participação em olimpíadas científicas e no meio acadêmico.",
    site: "https://www.tm2.org.br/",
  },
  {
    id: "oba",
    name: "Olimpíada Brasileira de Astronomia e Astronáutica",
    tags: ["Astronomia", "1° EF+"],
    anos: anos("1EF"),
    disclaimers: ["Inscrição pela escola"],
    description:
      "Competição nacional de astronomia e astronáutica para alunos do ensino fundamental e médio.",
    site: "http://www.oba.org.br/",
  },
  {
    id: "obc",
    name: "Olimpíada Brasileira de Cidadania",
    tags: ["Ciências humanas e sociais", "Em equipe", "EM"],
    anos: anos("1EM"),
    disclaimers: ["Inscrição pela escola"],
    description:
      "A Olimpíada com o objetivo de promover o engajamento de estudantes do Ensino Médio com temas fundamentais da vida em democracia.",
    site: "https://olimpiadacidadania.com.br/",
  },
  {
    id: "obecon",
    name: "Olimpíada Brasileira de Economia",
    tags: ["Ciências humanas e sociais", "9° EF+"],
    anos: anos("9EF"),
    description:
      "Competição nacional de economia que estimula conhecimentos em macroeconomia, finanças, atualidades e pensamento analítico.",
    site: "https://www.obecon.org/",
  },
  {
    id: "obl",
    name: "Olimpíada Brasileira de Linguística",
    tags: ["Linguagens", "Aberta"],
    description:
      "Competição nacional voltada para raciocínio linguístico, análise de padrões e resolução de problemas envolvendo idiomas.",
    site: "https://obling.org/",
  },
  {
    id: "obg",
    name: "Olimpíada Brasileira de Geografia",
    tags: ["Ciências humanas e sociais", "Em equipe", "9° EF+"],
    anos: anos("9EF"),
    disclaimers: ["Inscrição pela escola"],
    description:
      "Olimpíada educacional que estimula o conhecimento em Geografia, atualidades e análise crítica entre estudantes brasileiros.",
    site: "https://obgeografia.com.br/",
  },
  {
    id: "obi",
    name: "Olimpíada Brasileira de Informática",
    tags: ["Tecnologia", "4° EF+"],
    anos: anos("4EF"),
    disclaimers: ["Inscrição pela escola"],
    description:
      "A principal olimpíada de informática do Brasil, com o objetivo se despertar o interesse dos estudantes por computação.",
    site: "https://olimpiada.ic.unicamp.br/",
  },
  {
    id: "obt",
    name: "Olimpíada Brasileira de Tecnologia",
    tags: ["Tecnologia", "Em equipe", "8° EF+"],
    anos: anos("8EF"),
    disclaimers: ["Inscrição pela escola"],
    description:
      "Competição com parceria com o MIT e o ITA em que os participantes devem criar um protótipo de um aplicativo com a solução para um problema social.",
    site: "https://portal.olimpiadas.org.br/code/obt",
  },
  {
    id: "onia",
    name: "Olimpíada Nacional de Inteligência Artificial",
    tags: ["Tecnologia", "6° EF+"],
    anos: anos("6EF"),
    description: "Olimpíada com o objetivo de promover o letramento digital e difundir o conhecimento em Inteligência Artificial no Brasil.",
    site: "https://www.oniabrasil.com.br/",
  },
];

const container = document.getElementById("cards-container");

// Remove acentos, deixa minúsculo e troca espaços por hífen: "Ciências humanas" -> "ciencias-humanas"
const slug = (texto) =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

// Avisos que impedem a inscrição direta pelo próprio aluno
const AVISOS_SEM_INSCRICAO_DIRETA = [
  "inscricao-pela-escola",
  "classificacao-necessaria",
];

const temInscricaoDireta = (c) =>
  !(c.disclaimers ?? []).some((d) =>
    AVISOS_SEM_INSCRICAO_DIRETA.includes(slug(d)),
  );

function cardHTML({ id, name, tags, disclaimers, description }) {
  return `<article class="card"><a href="Competicoes/${id}.html">
    <img src="0Imagens/${id}-logo.png" alt="">
    <h3>${name}</h3>
    ${tags.map((tag) => `<p class="summary">${tag}</p>`).join(" ")}
    ${(disclaimers ?? []).map((disclaimer) => `<p class="disclaimer">${disclaimer}</p>`).join(" ")}
    <p>${description}</p></a>
    </article>`;
}

if (container) {
  const dropAssunto = document.getElementById("assunto");
  const dropAno = document.getElementById("ano");
  const btnDireta = document.getElementById("inscricao-direta");
  const resultado = document.getElementById("resultado");

  const dropdowns = [
    { el: dropAssunto, vazio: "Todos os assuntos", plural: "assuntos" },
    { el: dropAno, vazio: "Todos os anos", plural: "anos" },
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
    const assuntosSel = selecionados(dropAssunto);
    const anosSel = selecionados(dropAno);
    const soDireta = btnDireta.getAttribute("aria-pressed") === "true";

    // Dentro de cada filtro vale "qualquer um dos selecionados" (OU);
    // entre filtros diferentes todos precisam ser atendidos (E).
    const filtradas = competitions.filter((c) => {
      if (
        assuntosSel.length &&
        !c.tags.some((tag) => assuntosSel.includes(slug(tag)))
      )
        return false;
      // sem "anos" = aberta a qualquer ano
      if (anosSel.length && c.anos && !c.anos.some((a) => anosSel.includes(a)))
        return false;
      if (soDireta && !temInscricaoDireta(c)) return false;
      return true;
    });

    container.innerHTML = filtradas.map(cardHTML).join("");

    resultado.textContent =
      filtradas.length === 0
        ? "Nenhuma competição encontrada. Tente mudar ou remover algum filtro."
        : `${filtradas.length} ${filtradas.length === 1 ? "competição encontrada" : "competições encontradas"}`;
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

  btnDireta.addEventListener("click", () => {
    const ativo = btnDireta.getAttribute("aria-pressed") === "true";
    btnDireta.setAttribute("aria-pressed", String(!ativo));
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
const obj = competitions.find((o) => o.id === tab);

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
