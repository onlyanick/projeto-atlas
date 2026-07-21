const competitions = [
  {
    id: "obmep",
    name: "Olimpíada Brasileira de Matemática das Escolas Públicas",
    logo: ".Imagens/obmeplogo.png",
    tags: ["Matemática", "6° EF+"],
    disclaimers: ["Inscrição pela escola"],
    description:
      "Principal olimpíada de matemática do Brasil, porta de entrada para matemática olímpica.",
    site: "https://www.obmep.org.br/",
  },
  {
    id: "obm",
    name: "Olimpíada Brasileira de Matemática",
    logo: ".Imagens/obmlogo.png",
    tags: ["Matemática", "6° EF+"],
    disclaimers: ["Classificação necessária"],
    description:
      "A mais prestigiada olimpíada de matemática do Brasil e caminho para olimpíadas internacionais.",
    site: "https://www.obm.org.br/",
  },
  {
    id: "obf",
    name: "Olimpíada Brasileira de Física",
    logo: ".Imagens/obflogo.png",
    tags: ["Física", "6° EF+"],
    description:
      "Olimpíada nacional de física que incentiva o estudo da disciplina e prepara estudantes para desafios científicos.",
    site: "https://www.sbfisica.org.br/v1/olimpiada/",
  },
  {
    id: "obq",
    name: "Olimpíada Brasileira de Química",
    logo: ".Imagens/obqlogo.png",
    tags: ["Química", "EM"],
    disclaimers: ["Classificação necessária"],
    description:
      "Competição nacional de química para estudantes do ensino médio.",
    site: "https://obquimica.org/",
  },
  {
    id: "obqjr",
    name: "Olimpíada Brasileira de Química Júnior",
    logo: ".Imagens/obqjrlogo.png",
    tags: ["Química", "EF II"],
    disclaimers: ["Inscrição pela escola"],
    description:
      "Competição nacional de química para estudantes do ensino fundamental.",
    site: "https://obqjr.obquimica.org/",
  },
  {
    id: "quimeninas",
    name: "Quimeninas",
    logo: ".Imagens/quimeninaslogo.png",
    tags: ["Química", "9° EF", "1° EM", "2°EM"],
    description:
      "Olimpíada nacional feminina de química que incentiva a participação de meninas nas ciências e na OBQ.",
    site: "https://obquimica.org/olimpiada/olimpiada-quimeninas",
  },
  {
    id: "onhb",
    name: "Olimpíada Nacional em História do Brasil",
    logo: ".Imagens/onhblogo.png",
    tags: ["História", "7° EF+"],
    description:
      "Olimpíada nacional de história organizada pela Unicamp, realizada em grupo.",
    site: "https://www.olimpiadadehistoria.com.br/",
  },
  {
    id: "omu",
    name: "Olimpíada de Matemática da Unicamp",
    logo: ".Imagens/omulogo.png",
    tags: ["Matemática", "8° EF+"],
    description:
      "Olimpíada de matemática organizada pela Unicamp e realizada em grupo.",
    site: "https://www.olimpiada.ime.unicamp.br/",
  },
  {
    id: "obb",
    name: "Olimpíada Brasileira de Biologia",
    logo: ".Imagens/obblogo.png",
    tags: ["Biologia", "EM"],
    disclaimers: ["Inscrição pela escola"],
    description:
      "Competição nacional de biologia para estudantes do ensino médio.",
    site: "https://olimpiadasdebiologia.butantan.gov.br/",
  },
  {
    id: "jacob-palis",
    name: "Competição Jacob Palis Júnior de Matemática",
    logo: ".Imagens/jacobpalislogo.png",
    tags: ["Matemática", "6° EF+"],
    disclaimers: ["Inscrição pela escola"],
    description:
      "Olimpíada de matemática classificatória para a OBM e para o Torneio Meninas na Matemática.",
    site: "https://www.obm.org.br/competicao-jacob-palis-junior-de-matematica/",
  },
  {
    id: "tm2",
    name: "Torneio Meninas na Matemática",
    logo: ".Imagens/tm2logo.png",
    tags: ["Matemática", "6° EF+"],
    disclaimers: ["Classificação necessária"],
    description:
      "Competição voltada para meninas, incentivando a participação em olimpíadas científicas e no meio acadêmico.",
    site: "https://www.tm2.org.br/",
  },
  {
    id: "oba",
    name: "Olimpíada Brasileira de Astronomia e Astronáutica",
    logo: ".Imagens/obalogo.png",
    tags: ["Astronomia", "1° EF+"],
    disclaimers: ["Inscrição pela escola"],
    description:
      "Competição nacional de astronomia e astronáutica para alunos do ensino fundamental e médio.",
    site: "http://www.oba.org.br/",
  },
  {
    id: "obecon",
    name: "Olimpíada Brasileira de Economia",
    logo: ".Imagens/obeconlogo.png",
    tags: ["Economia", "9° EF+"],
    description:
      "Competição nacional de economia que estimula conhecimentos em macroeconomia, finanças, atualidades e pensamento analítico.",
    site: "https://www.obecon.org/",
  },
  {
    id: "obl",
    name: "Olimpíada Brasileira de Linguística",
    logo: ".Imagens/obllogo.png",
    tags: ["Linguística", "Aberta"],
    description:
      "Competição nacional voltada para raciocínio linguístico, análise de padrões e resolução de problemas envolvendo idiomas.",
    site: "https://obling.org/",
  },
  {
    id: "obg",
    name: "Olimpíada Brasileira de Geografia",
    logo: ".Imagens/obg-logo.png",
    tags: ["Geografia", "9° EF+"],
    disclaimers: ["Inscrição pela escola"],
    description:
      "Olimpíada educacional que estimula o conhecimento em Geografia, atualidades e análise crítica entre estudantes brasileiros.",
    site: "https://obgeografia.com.br/",
  },
  {
    id: "obt",
    name: "Olimpíada Brasileira de Tecnologia",
    logo: ".Imagens/obtlogo.png",
    tags: ["Computação", "8° EF+"],
    disclaimers: ["Inscrição pela escola"],
    description:
      "Competição com parceria com o MIT e o ITA em que os participantes devem criar um protótipo de um aplicativo com a solução para um problema social.",
    site: "https://portal.olimpiadas.org.br/code/obt",
  },
];

const container = document.getElementById("cards-container");

if (container) {
  competitions.forEach(
    ({id, name, tags, disclaimers, description }) => {
      container.innerHTML += `<article class="card"><a href="Competicoes/${id}.html">
    <img src=".Imagens/${id}-logo.png" alt="">
    <h3>${name}</h3>
    ${tags.map((tag) => `<p class="summary">${tag}</p>`).join(" ")}
    ${(disclaimers ?? []).map((disclaimer) => `<p class="disclaimer">${disclaimer}</p>`).join(" ")}
    <p>${description}</p></a>
    </article>`;
    },
  );
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
    <img src="../.Imagens/${obj.id}-logo.png" alt="">
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
