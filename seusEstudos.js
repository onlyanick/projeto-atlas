const Applications = [
  {
    id: "behring-academy",
    name: "Sprint Behring Academy",
    application: [6, 7, 8],
  },
  {
    id: "educationusa",
    name: "EducationUSA",
    application: [0, 10, 11],
  },
  {
    id: "escola-de-talentos",
    name: "Escola de Talentos - Instituto Principia",
    application: [1, 2],
  },
  {
    id: "gauss",
    name: "Projeto Gauss",
    application: [7, 8, 9],
  },
  {
    id: "ismart",
    name: "Ismart",
    application: [2, 3, 4, 5],
  },
  {
    id: "inspire",
    name: "Inspire - Instituto Selma Paschini",
    application: [6, 7],
  },
  {
    id: "instituto-ponte",
    name: "Instituto Ponte",
    application: [0, 1, 2],
  },
  {
    id: "lala",
    name: "Latin America Leadership Academy",
    application: [3, 4, 5, 6],
  },
  {
    id: "obecon",
    name: "Olimpíada Brasileira de Economia (Inscrições)",
    application: [3, 4],
  },
  {
    id: "obf",
    name: "Olimpíada Brasileira de Física (Inscrições)",
    application: [3, 4],
  },
  {
    id: "obl",
    name: "Olimpíada Brasileira de Linguística (Inscrições)",
    application: [4],
  },
  {
    id: "omu",
    name: "Olimpíada de Matemática da Unicamp (Inscrições)",
    application: [1, 2],
  },
  {
    id: "onhb",
    name: "Olimpíada Nacional em História do Brasil (Inscrições)",
    application: [1, 2, 3],
  },
  {
    id: "peti",
    name: "PETI-OBM",
    application: [10, 11],
  },
  {
    id: "prep-program",
    name: "Fundação Estudar - Prep Program",
    application: [6, 7, 8],
  },
  {
    id: "quimeninas",
    name: "Quimeninas (Inscrições)",
    application: [6, 7, 8],
  },
  {
    id: "uwc",
    name: "United World Colleges",
    application: [7, 8],
  },
  {
    id: "yygs",
    name: "Yale Young Global Scholars",
    application: [8, 9, 10, 11, 0],
  },
];

const btnBack = document.getElementById("buttonBack");
const btnNext = document.getElementById("buttonNext");
const calendar = document.getElementById("calendar");
const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

let month = new Date().getMonth();

function getMonth(month) {
  let openApplies = Applications.filter((o) => o.application.includes(month));
  calendar.innerHTML += `<h3>Calendário - ${months[month]}</h3>`;
  if (openApplies.length === 0) {
    calendar.innerHTML += `<p>Nenhum evento registrado nesse período</p>`;
  } else {
    openApplies.forEach(({ id, name }) => {
      if (name.includes("(Inscrições)")) {
        calendar.innerHTML += `<a href="Competicoes/${id}.html"> <div class="applyCard">
      <img src="/0Imagens/${id}-logo.png" alt="">
      <p>${name}</p>
    </div>
    </a>`;
      } else {
        calendar.innerHTML += `<a href="Oportunidades/${id}.html"> <div class="applyCard">
      <img src="/0Imagens/${id}-logo.png" alt="">
      <p>${name}</p>
    </div>
    </a>`;
      }
    });
  }
}

getMonth(month);

btnNext.addEventListener("click", () => {
  if (month === 11) {
    month = 0;
  } else {
    month++;
  }
  calendar.innerHTML = "";
  getMonth(month);
  console.log(month);
});

btnBack.addEventListener("click", () => {
  if (month === 0) {
    month = 11;
  } else {
    month--;
  }
  calendar.innerHTML = "";
  getMonth(month);
});

// TIMER POMODORO

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const pomoTimer = document.getElementById("pomoTimer");
const timeDisplay = document.getElementById("timeDisplay");
const breakTimer = document.getElementById("pauseTimer");
const pomoCounter = document.getElementById("pomoCounter");
const breakP = document.getElementById("pauseP");
const focusP = document.getElementById("focusP");

let timeLeft = 0;
let interval;
let pomosDone = 0;
let isTimeOn = false;
let isBreakOn = false;
let isPauseOn = false;
let pomoSessionStart = 0;

async function runTime() {
  if (timeLeft <= 0) {
    clearInterval(interval);

    // Ciclo de foco concluído: registra em Tempo de Estudos (pausas não contam)
    if (isTimeOn) registrarEstudoPomodoro();

    if (isBreakOn) {
      pomosDone++;
      pomoCounter.innerText = `Ciclos completos: ${pomosDone}/4`;
    }

    timeDisplay.innerText = `Tempo finalizado!`;
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (isTimeOn && pomosDone < 4) {
      isBreakOn = true;
      isTimeOn = false;
      focusP.innerText = "Tempo de intervalo";
      timeLeft = Number(breakTimer.value * 60);
      interval = setInterval(runTime, 1000);
    } else if (isBreakOn && pomosDone < 3) {
      isBreakOn = false;
      isTimeOn = true;
      focusP.innerText = "Tempo de foco";
      timeLeft = Number(pomoTimer.value) * 60;
      interval = setInterval(runTime, 1000);
    } else {
      timeDisplay.innerText = `Ciclos completos!`;
      await new Promise((resolve) => setTimeout(resolve, 1000));

      isTimeOn = false;
      timeLeft = 0;
      pomoTimer.style.display = "block";
      breakTimer.style.display = "block";
      pomoCounter.style.display = "block";
      breakP.style.display = "block";
      startBtn.innerText = "Começar";
      timeDisplay.innerText = "";
    }
  } else {
    timeDisplay.innerHTML = `${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, "0")}`;
    timeLeft--;
  }
}

startBtn.addEventListener("click", () => {
  if (timeLeft === 0) {
    timeLeft = Number(pomoTimer.value) * 60;
  }

  if (!isTimeOn && !isPauseOn && !isBreakOn) {
    //começa o timer
    pomoSessionStart = Date.now();
    isTimeOn = true;
    startBtn.innerText = "Pausar";
    pomoTimer.style.display = "none";
    breakTimer.style.display = "none";
    breakP.style.display = "none";
    clearInterval(interval);
    interval = setInterval(runTime, 1000);
  } else if (!isPauseOn) {
    //pausa
    clearInterval(interval);
    isPauseOn = true;
    startBtn.innerText = "Continuar";
  } else if (isPauseOn) {
    //volta
    isPauseOn = false;
    interval = setInterval(runTime, 1000);
    startBtn.innerText = "Pausar";
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  isTimeOn = false;
  isBreakOn = false;
  isPauseOn = false;
  timeLeft = 0;
  pomoTimer.style.display = "block";
  breakTimer.style.display = "block";
  pomoCounter.style.display = "block";
  breakP.style.display = "block";
  startBtn.innerText = "Começar";
  timeDisplay.innerText = "";
});

// LISTA DE TAREFAS

const addBtn = document.getElementById("addBtn");
const toDoList = document.getElementById("toDoList");
const prioridade = [
  NaN,
  "Prioritário",
  "Importante",
  "Secundário",
  "",
  "Concluído",
];

let toDoForm;
let toDoData;
let dbRequest = indexedDB.open("toDoDB", 1);
let newCard = true;
let editCardID;

dbRequest.onupgradeneeded = function (event) {
  toDoData = event.target.result;
  toDoData.createObjectStore("lista", { keyPath: "id", autoIncrement: true });
};

dbRequest.onsuccess = function (event) {
  toDoData = event.target.result;
  renderList();
};

function renderList() {
  let transaction = toDoData.transaction("lista");
  let store = transaction.objectStore("lista");
  let storeRequest = store.getAll();

  storeRequest.onsuccess = function () {
    let fullList = storeRequest.result.sort(
      (a, b) => a.prioridade - b.prioridade,
    );
    toDoList.innerHTML = "<h3>Lista de Tarefas</h3>";
    fullList.forEach((obj) => {
      const card = document.createElement("div");
      card.className = "toDoCard";
      card.id = `card${obj.id}`;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "checkBtn";
      checkbox.checked = obj.checked;

      const title = document.createElement("p");
      title.className = "toDoTitle";
      title.innerText = `${obj.title}`;
      if (obj.prioridade === 5) {
        title.classList.add("Secundário");
        title.style.textDecoration = "line-through";
      }

      const desc = document.createElement("p");
      desc.className = "toDoDesc";
      desc.innerText = `${obj.description}`;

      const priority = document.createElement("p");
      priority.className = `priorityTag ${prioridade[obj.prioridade]}`;
      priority.innerText = `${prioridade[obj.prioridade]}`;

      const editBtn = document.createElement("button");
      editBtn.className = "editBtn";
      editBtn.innerText = "Editar";

      editBtn.addEventListener("click", () => {
        card.remove();
        newCard = false;
        editCardID = obj.id;
        toDoList.innerHTML += `
        <div class="toDoCard" id="thisBorder">
          <form id="toDoForm">
            <input
              type="text"
              class="toDoTitle"
              name="title"
              value="${obj.title}"
              required
            />

            <input
              type="text"
              class="toDoDesc"
              name="description"
              placeholder="${obj.description || "Descrição da tarefa (opcional)"}"
            />

            <fieldset>
              <label>
                <input
                  type="radio"
                  name="prioridade"
                  value="0"
                />
                Prioritário
              </label>

              <label>
                <input
                  type="radio"
                  name="prioridade"
                  value="1"
                />
                Importante
              </label>

              <label>
                <input
                  type="radio"
                  name="prioridade"
                  value="2"
                />
                Secundário
              </label>
            </fieldset>

            <input
              type="submit"
              id="submitBtn"
              value="Atualizar tarefa"
            />
          </form>
        </div>
      `;
        addBtn.innerText = `Apagar`;

        toDoForm = document.getElementById("toDoForm");
        toDoList.scrollTo({
          top: toDoForm.offsetTop,
          behavior: "smooth",
        });

        toDoForm.addEventListener("submit", (event) => {
          event.preventDefault();

          let formData = new FormData(toDoForm);
          toDoForm.remove();
          thisBorder.remove();
          obj.title = formData.get("title");
          obj.description = formData.get("description");
          obj.constPrioridade = Number(formData.get("prioridade")) + 1 || 4;
          obj.prioridade = Number(formData.get("prioridade") || 3) + 1;

          let store = toDoData
            .transaction(["lista"], "readwrite")
            .objectStore("lista");

          store.put(obj);
          renderList();
        });
      });

      card.append(checkbox, title, desc, priority, editBtn);
      toDoList.appendChild(card);

      addBtn.innerText = `Adicionar`;

      checkbox.addEventListener("change", () => {
        if (obj.checked === false) {
          obj.checked = true;
          obj.prioridade = 5;

          let transaction = toDoData.transaction(["lista"], "readwrite");
          let store = transaction.objectStore("lista");
          store.put(obj);
          renderList();
        } else {
          obj.checked = false;
          obj.prioridade = obj.constPrioridade;
          let transaction = toDoData.transaction(["lista"], "readwrite");
          let store = transaction.objectStore("lista");
          store.put(obj);
          renderList();
        }
      });
    });
  };
}

function addToDo(item) {
  let transaction = toDoData.transaction(["lista"], "readwrite");
  let store = transaction.objectStore("lista");

  let addRequest = store.add(item);
  addRequest.onsuccess = function (event) {
    item.id = event.target.result;
  };
}

addBtn.addEventListener("click", () => {
  toDoForm = document.getElementById("toDoForm");

  if (!toDoForm) {
    toDoList.innerHTML += `
      <div class="toDoCard" id="thisBorder">
        <form id="toDoForm">
          <input
            type="text"
            class="toDoTitle"
            name="title"
            placeholder="Título"
            required
          />

          <input
            type="text"
            class="toDoDesc"
            name="description"
            placeholder="Descrição da tarefa (opcional)"
          />

          <fieldset>
            <label>
              <input
                type="radio"
                name="prioridade"
                value="0"
              />
              Prioritário
            </label>

            <label>
              <input
                type="radio"
                name="prioridade"
                value="1"
              />
              Importante
            </label>

            <label>
              <input
                type="radio"
                name="prioridade"
                value="2"
              />
              Secundário
            </label>
          </fieldset>

          <input
            type="submit"
            id="submitBtn"
            value="Criar tarefa"
          />
        </form>
      </div>
    `;
    addBtn.innerText = `Cancelar`;

    toDoForm = document.getElementById("toDoForm");
    toDoList.scrollTo({
      top: toDoForm.offsetTop,
      behavior: "smooth",
    });
    toDoForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let formData = new FormData(toDoForm);
      toDoForm.remove();
      thisBorder.remove();
      let toDo = {
        title: formData.get("title"),
        description: formData.get("description"),
        constPrioridade: Number(formData.get("prioridade")) + 1 || 4,
        prioridade: Number(formData.get("prioridade") || 3) + 1,
        checked: false,
      };

      toDoList.scrollTo({
        top: top,
        behavior: "smooth",
      });
      addToDo(toDo);
      renderList();
    });
  } else {
    toDoForm.remove();
    thisBorder.remove();
    if (!newCard) {
      newCard = true;
      store = toDoData.transaction(["lista"], "readwrite").objectStore("lista");
      store.delete(editCardID);
    }
    addBtn.innerText = `Adicionar`;
    renderList();
    toDoList.scrollTo({
      top: top,
      behavior: "smooth",
    });
  }
});

// ARMAZENAMENTO (LocalStorage) — compartilhado pelas ferramentas de estudo

const Armazenamento = {
  prefixo: "atlas:estudos:",

  ler(chave, padrao = null) {
    let bruto = null;
    try {
      bruto = localStorage.getItem(this.prefixo + chave);
      return bruto === null ? padrao : JSON.parse(bruto);
    } catch (erro) {
      // Dado ilegível: guarda uma cópia para o próximo salvamento não apagá-lo
      if (bruto !== null) this.salvarBruto(`${chave}:corrompido`, bruto);
      return padrao;
    }
  },

  salvar(chave, valor) {
    return this.salvarBruto(chave, JSON.stringify(valor));
  },

  salvarBruto(chave, texto) {
    try {
      localStorage.setItem(this.prefixo + chave, texto);
      return true;
    } catch (erro) {
      return false;
    }
  },
};

// BLOCO DE NOTAS

const notepadText = document.getElementById("notepadText");
const notepadStatus = document.getElementById("notepadStatus");
const NOTAS_CHAVE = "notas";

let notepadTimer;
let notepadPending = false;

function setNotepadStatus(texto, erro = false) {
  notepadStatus.innerText = texto;
  notepadStatus.classList.toggle("erro", erro);
}

function saveNotepad() {
  clearTimeout(notepadTimer);
  notepadPending = false;

  const salvo = Armazenamento.salvar(NOTAS_CHAVE, {
    versao: 1,
    texto: notepadText.value,
    atualizadoEm: new Date().toISOString(),
  });
  const hora = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  setNotepadStatus(
    salvo
      ? `Salvo às ${hora}`
      : "Não foi possível salvar. Copie o texto para não perdê-lo.",
    !salvo,
  );
}

const savedNote = Armazenamento.ler(NOTAS_CHAVE);
if (savedNote && typeof savedNote.texto === "string") {
  notepadText.value = savedNote.texto;
}

notepadText.addEventListener("input", () => {
  notepadPending = true;
  setNotepadStatus("Salvando…");
  clearTimeout(notepadTimer);
  notepadTimer = setTimeout(saveNotepad, 500);
});

// Salva na hora se a página for fechada ou escondida antes do tempo de espera
function flushNotepad() {
  if (notepadPending) saveNotepad();
}

window.addEventListener("pagehide", flushNotepad);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") flushNotepad();
});

// Outra aba alterou as notas: atualiza aqui para não sobrescrever com texto antigo
window.addEventListener("storage", (evento) => {
  if (evento.key !== Armazenamento.prefixo + NOTAS_CHAVE || notepadPending) return;

  const nota = Armazenamento.ler(NOTAS_CHAVE);
  if (nota && typeof nota.texto === "string" && nota.texto !== notepadText.value) {
    notepadText.value = nota.texto;
  }
});

// TEMPO DE ESTUDOS

const STUDY_CHAVE = "tempo";
const SEMANA_COMECA_EM = 1; // 0 = domingo, 1 = segunda-feira

const studyTabs = document.querySelectorAll(".studyTab");
const studyTotal = document.getElementById("studyTotal");
const studyPeriod = document.getElementById("studyPeriod");
const studyList = document.getElementById("studyList");
const studyForm = document.getElementById("studyForm");
const studyAddBtn = document.getElementById("studyAddBtn");
const studyActivity = document.getElementById("studyActivity");
const studyHours = document.getElementById("studyHours");
const studyDate = document.getElementById("studyDate");
const studySubmit = document.getElementById("studySubmit");

let studyView = "total";
let studyEditId = null;

function dataISO(d = new Date()) {
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  const dia = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mes}-${dia}`;
}

function formatarData(iso) {
  const [a, m, d] = iso.split("-");
  return `${d}/${m}/${a}`;
}

function formatarDiaMes(d) {
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function formatarTempo(minutos) {
  const total = Math.round(minutos);
  const h = Math.floor(total / 60);
  const m = total % 60;
  if (h === 0) return `${m}min`;
  return m === 0 ? `${h}h` : `${h}h ${String(m).padStart(2, "0")}min`;
}

function semanaAtual() {
  const hoje = new Date();
  const inicio = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
  inicio.setDate(inicio.getDate() - ((inicio.getDay() - SEMANA_COMECA_EM + 7) % 7));
  const fim = new Date(inicio.getFullYear(), inicio.getMonth(), inicio.getDate() + 6);
  return { inicio, fim };
}

// Lê sempre do LocalStorage, para não sobrescrever registros criados em outra aba
function lerRegistros() {
  const dados = Armazenamento.ler(STUDY_CHAVE);
  if (!dados || !Array.isArray(dados.registros)) return [];
  return dados.registros.filter(
    (r) => r && typeof r.data === "string" && typeof r.atividade === "string" && Number(r.minutos) > 0,
  );
}

function mudarRegistros(alterar) {
  const registros = lerRegistros();
  alterar(registros);
  if (!Armazenamento.salvar(STUDY_CHAVE, { versao: 1, registros })) {
    alert("Não foi possível salvar o registro neste navegador.");
  }
  renderStudy();
}

function registrosDoPeriodo(registros) {
  if (studyView === "mes") {
    const prefixo = dataISO().slice(0, 7);
    return registros.filter((r) => r.data.startsWith(prefixo));
  }
  if (studyView === "semana") {
    const { inicio, fim } = semanaAtual();
    return registros.filter((r) => r.data >= dataISO(inicio) && r.data <= dataISO(fim));
  }
  return registros;
}

function rotuloPeriodo(qtd) {
  const contagem = `${qtd} ${qtd === 1 ? "registro" : "registros"}`;
  if (studyView === "mes") {
    const hoje = new Date();
    return `${months[hoje.getMonth()]} de ${hoje.getFullYear()}, ${contagem}`;
  }
  if (studyView === "semana") {
    const { inicio, fim } = semanaAtual();
    return `Semana de ${formatarDiaMes(inicio)} a ${formatarDiaMes(fim)}, ${contagem}`;
  }
  return `Todo o tempo acumulado, ${contagem}`;
}

function criarItemEstudo(r) {
  const item = document.createElement("div");
  item.className = "studyItem";

  const info = document.createElement("div");
  info.className = "studyInfo";
  const nome = document.createElement("p");
  nome.className = "studyName";
  nome.innerText = r.atividade;
  const meta = document.createElement("p");
  meta.className = "studyMeta";
  meta.innerText = `${formatarData(r.data)}, ${r.origem === "pomodoro" ? "Pomodoro" : "manual"}`;
  info.append(nome, meta);

  const duracao = document.createElement("span");
  duracao.className = "studyDur";
  duracao.innerText = formatarTempo(r.minutos);

  const editar = document.createElement("button");
  editar.className = "studyItemBtn";
  editar.innerText = "Editar";
  editar.setAttribute("aria-label", `Editar registro: ${r.atividade}`);
  editar.addEventListener("click", () => abrirFormEstudo(r));

  const excluir = document.createElement("button");
  excluir.className = "studyItemBtn";
  excluir.innerText = "Excluir";
  excluir.setAttribute("aria-label", `Excluir registro: ${r.atividade}`);
  excluir.addEventListener("click", () => {
    if (!confirm("Excluir este registro de estudo?")) return;
    if (studyEditId === r.id) fecharFormEstudo();
    mudarRegistros((registros) => {
      const i = registros.findIndex((x) => x.id === r.id);
      if (i >= 0) registros.splice(i, 1);
    });
  });

  item.append(info, duracao, editar, excluir);
  return item;
}

function renderStudy() {
  const lista = registrosDoPeriodo(lerRegistros()).sort(
    (a, b) => b.data.localeCompare(a.data) || (b.criadoEm || 0) - (a.criadoEm || 0),
  );
  const soma = lista.reduce((total, r) => total + Number(r.minutos), 0);

  studyTabs.forEach((aba) =>
    aba.setAttribute("aria-pressed", String(aba.dataset.periodo === studyView)),
  );
  studyTotal.innerText = formatarTempo(soma);
  studyPeriod.innerText = rotuloPeriodo(lista.length);

  studyList.innerHTML = "";
  if (lista.length === 0) {
    const vazio = document.createElement("p");
    vazio.className = "studyEmpty";
    vazio.innerText = "Nenhum registro neste período.";
    studyList.appendChild(vazio);
  }
  lista.forEach((r) => studyList.appendChild(criarItemEstudo(r)));
}

function abrirFormEstudo(registro = null) {
  studyEditId = registro ? registro.id : null;
  studyActivity.value = registro ? registro.atividade : "";
  studyHours.value = registro ? Math.round((registro.minutos / 60) * 100) / 100 : "";
  studyDate.value = registro ? registro.data : dataISO();
  studySubmit.value = registro ? "Atualizar registro" : "Salvar registro";
  studyForm.hidden = false;
  studyAddBtn.innerText = "Cancelar";
  studyActivity.focus();
}

function fecharFormEstudo() {
  studyForm.hidden = true;
  studyEditId = null;
  studyAddBtn.innerText = "Adicionar";
}

studyAddBtn.addEventListener("click", () => {
  if (studyForm.hidden) abrirFormEstudo();
  else fecharFormEstudo();
});

studyForm.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const dados = {
    atividade: studyActivity.value.trim(),
    minutos: Math.round(Number(studyHours.value) * 60),
    data: studyDate.value,
  };
  if (!dados.atividade || !(dados.minutos > 0) || !dados.data) return;

  mudarRegistros((registros) => {
    const existente = registros.find((r) => r.id === studyEditId);
    if (existente) {
      Object.assign(existente, dados);
    } else {
      registros.push({
        id: `manual-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        origem: "manual",
        criadoEm: Date.now(),
        ...dados,
      });
    }
  });
  fecharFormEstudo();
});

studyTabs.forEach((aba) =>
  aba.addEventListener("click", () => {
    studyView = aba.dataset.periodo;
    renderStudy();
  }),
);

// Chamada pelo Pomodoro ao concluir um ciclo de foco.
// O id (início da sessão + ciclo) impede registro duplicado do mesmo ciclo.
function registrarEstudoPomodoro() {
  const minutos = Number(pomoTimer.value);
  if (!(minutos > 0)) return;

  const id = `pomodoro-${pomoSessionStart}-${pomosDone}`;
  mudarRegistros((registros) => {
    if (registros.some((r) => r.id === id)) return;
    registros.push({
      id,
      origem: "pomodoro",
      criadoEm: Date.now(),
      atividade: "Foco no Pomodoro",
      minutos,
      data: dataISO(),
    });
  });
}

// Outra aba alterou os registros: atualiza a visualização
window.addEventListener("storage", (evento) => {
  if (evento.key === Armazenamento.prefixo + STUDY_CHAVE) renderStudy();
});

renderStudy();

// METAS DE ESTUDO

const METAS_CHAVE = "metas";
const goalList = document.getElementById("goalList");
const goalForm = document.getElementById("goalForm");
const goalAddBtn = document.getElementById("goalAddBtn");
const goalTitleInput = document.getElementById("goalTitle");
const goalDescInput = document.getElementById("goalDesc");
const goalStepsInput = document.getElementById("goalSteps");

function novoId(prefixo) {
  return `${prefixo}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function criar(tag, classe, texto) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto !== undefined) e.textContent = texto;
  return e;
}

// Lê sempre do LocalStorage, para não sobrescrever alterações feitas em outra aba
function lerMetas() {
  const dados = Armazenamento.ler(METAS_CHAVE);
  if (!dados || !Array.isArray(dados.metas)) return [];
  return dados.metas
    .filter((m) => m && typeof m.id === "string")
    .map((m) => ({ ...m, etapas: Array.isArray(m.etapas) ? m.etapas : [] }));
}

function mudarMetas(alterar, redesenhar = true) {
  const metas = lerMetas();
  alterar(metas);
  if (!Armazenamento.salvar(METAS_CHAVE, { versao: 1, metas })) {
    alert("Não foi possível salvar as metas neste navegador.");
  }
  if (redesenhar) renderGoals();
}

function editarMeta(id, alterar, redesenhar = true) {
  mudarMetas((metas) => {
    const meta = metas.find((m) => m.id === id);
    if (meta) alterar(meta);
  }, redesenhar);
}

// Porcentagem = (etapas concluídas / total de etapas) × 100
function progressoMeta(meta) {
  const total = meta.etapas.length;
  const feitas = meta.etapas.filter((e) => e.concluida).length;
  return { total, feitas, pct: total === 0 ? 0 : Math.round((feitas / total) * 100) };
}

function botaoPequeno(texto, rotulo, foco, acao, desativado = false) {
  const b = criar("button", "goalIconBtn", texto);
  b.type = "button";
  b.disabled = desativado;
  b.dataset.foco = foco;
  b.setAttribute("aria-label", rotulo);
  b.addEventListener("click", acao);
  return b;
}

function criarEtapa(meta, etapa, indice, total) {
  const linha = criar("div", etapa.concluida ? "goalStep done" : "goalStep");
  const mudarEtapa = (alterar, redesenhar = true) =>
    editarMeta(meta.id, (m) => {
      const e = m.etapas.find((x) => x.id === etapa.id);
      if (e) alterar(e, m);
    }, redesenhar);

  const marca = criar("input", "goalCheck");
  marca.type = "checkbox";
  marca.checked = !!etapa.concluida;
  marca.dataset.foco = `check:${etapa.id}`;
  marca.setAttribute("aria-label", `Concluir etapa: ${etapa.texto}`);
  marca.addEventListener("change", () => mudarEtapa((e) => (e.concluida = marca.checked)));

  let ultimo = etapa.texto;
  const texto = criar("input", "goalStepText");
  texto.type = "text";
  texto.value = etapa.texto;
  texto.maxLength = 120;
  texto.setAttribute("aria-label", "Texto da etapa (clique para editar)");
  texto.addEventListener("input", () => {
    const novo = texto.value.trim();
    if (!novo) return;
    ultimo = novo;
    mudarEtapa((e) => (e.texto = novo), false);
  });
  texto.addEventListener("blur", () => {
    if (!texto.value.trim()) texto.value = ultimo;
  });

  const mover = (delta) =>
    mudarEtapa((e, m) => {
      const i = m.etapas.indexOf(e);
      const j = i + delta;
      if (j < 0 || j >= m.etapas.length) return;
      m.etapas.splice(i, 1);
      m.etapas.splice(j, 0, e);
    });

  linha.append(
    marca,
    texto,
    botaoPequeno("↑", `Subir etapa: ${etapa.texto}`, `sobe:${etapa.id}`, () => mover(-1), indice === 0),
    botaoPequeno("↓", `Descer etapa: ${etapa.texto}`, `desce:${etapa.id}`, () => mover(1), indice === total - 1),
    botaoPequeno("×", `Excluir etapa: ${etapa.texto}`, `del:${etapa.id}`, () =>
      editarMeta(meta.id, (m) => (m.etapas = m.etapas.filter((x) => x.id !== etapa.id))),
    ),
  );
  return linha;
}

function criarCartaoMeta(meta) {
  const { total, feitas, pct } = progressoMeta(meta);
  const cartao = criar("div", "goalCard");

  // Título e exclusão
  let ultimoTitulo = meta.titulo;
  const titulo = criar("input", "goalName");
  titulo.type = "text";
  titulo.value = meta.titulo;
  titulo.maxLength = 80;
  titulo.setAttribute("aria-label", "Título da meta (clique para editar)");
  titulo.addEventListener("input", () => {
    const novo = titulo.value.trim();
    if (!novo) return;
    ultimoTitulo = novo;
    editarMeta(meta.id, (m) => (m.titulo = novo), false);
  });
  titulo.addEventListener("blur", () => {
    if (!titulo.value.trim()) titulo.value = ultimoTitulo;
  });

  const excluir = criar("button", "goalDelBtn", "Excluir");
  excluir.type = "button";
  excluir.setAttribute("aria-label", `Excluir meta: ${meta.titulo}`);
  excluir.addEventListener("click", () => {
    if (!confirm(`Excluir a meta "${ultimoTitulo}" e todas as suas etapas?`)) return;
    mudarMetas((metas) => {
      const i = metas.findIndex((m) => m.id === meta.id);
      if (i >= 0) metas.splice(i, 1);
    });
  });
  const topo = criar("div", "goalHead");
  topo.append(titulo, excluir);

  // Descrição
  const desc = criar("textarea", "goalDesc");
  desc.rows = 2;
  desc.maxLength = 300;
  desc.value = meta.descricao || "";
  desc.placeholder = "Descrição (opcional)";
  desc.setAttribute("aria-label", "Descrição da meta (clique para editar)");
  desc.addEventListener("input", () => editarMeta(meta.id, (m) => (m.descricao = desc.value.trim()), false));

  // Progresso
  const barra = criar("div", "goalBar");
  barra.setAttribute("role", "progressbar");
  barra.setAttribute("aria-label", "Progresso da meta");
  barra.setAttribute("aria-valuemin", "0");
  barra.setAttribute("aria-valuemax", "100");
  barra.setAttribute("aria-valuenow", String(pct));
  const preenchimento = criar("div", "goalFill");
  preenchimento.style.width = `${pct}%`;
  barra.append(preenchimento);
  const rotulo = criar("p", "goalPct", total === 0 ? "Sem etapas ainda" : `${pct}% (${feitas} de ${total} etapas)`);

  // Etapas
  const etapas = criar("div", "goalSteps");
  meta.etapas.forEach((etapa, i) => etapas.append(criarEtapa(meta, etapa, i, total)));

  // Nova etapa
  const nova = criar("form", "goalAddStep");
  const campo = criar("input", "goalNewStep");
  campo.type = "text";
  campo.maxLength = 120;
  campo.placeholder = "Nova etapa";
  campo.dataset.foco = `nova:${meta.id}`;
  campo.setAttribute("aria-label", "Nova etapa");
  const enviar = criar("button", "goalAddStepBtn", "Adicionar");
  enviar.type = "submit";
  nova.append(campo, enviar);
  nova.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const texto = campo.value.trim();
    if (!texto) return;
    editarMeta(meta.id, (m) => m.etapas.push({ id: novoId("etapa"), texto, concluida: false }), false);
    renderGoals(`nova:${meta.id}`);
  });

  cartao.append(topo, desc, barra, rotulo, etapas, nova);
  return cartao;
}

// Redesenha mantendo a rolagem e o foco do teclado
function renderGoals(foco) {
  if (foco === undefined) {
    const ativo = document.activeElement;
    foco = ativo && ativo.dataset ? ativo.dataset.foco : null;
  }
  const rolagem = goalList.scrollTop;
  const metas = lerMetas();

  goalList.innerHTML = "";
  if (metas.length === 0) {
    goalList.append(criar("p", "goalEmpty", "Nenhuma meta ainda."));
  }
  metas.forEach((m) => goalList.append(criarCartaoMeta(m)));

  goalList.scrollTop = rolagem;
  if (foco) {
    const alvo = goalList.querySelector(`[data-foco="${foco}"]`);
    if (alvo) alvo.focus();
  }
}

function abrirFormMeta() {
  goalForm.reset();
  goalForm.hidden = false;
  goalAddBtn.innerText = "Cancelar";
  goalTitleInput.focus();
}

function fecharFormMeta() {
  goalForm.reset();
  goalForm.hidden = true;
  goalAddBtn.innerText = "Adicionar";
}

goalAddBtn.addEventListener("click", () => {
  if (goalForm.hidden) abrirFormMeta();
  else fecharFormMeta();
});

goalForm.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const titulo = goalTitleInput.value.trim();
  if (!titulo) return;

  const etapas = goalStepsInput.value
    .split("\n")
    .map((linha) => linha.replace(/^\s*[-*•]\s*/, "").trim())
    .filter(Boolean)
    .map((texto) => ({ id: novoId("etapa"), texto, concluida: false }));

  mudarMetas((metas) =>
    metas.unshift({ id: novoId("meta"), titulo, descricao: goalDescInput.value.trim(), criadoEm: Date.now(), etapas }),
  );
  fecharFormMeta();
});

// Outra aba alterou as metas: atualiza, sem interromper quem está digitando aqui
window.addEventListener("storage", (evento) => {
  if (evento.key !== Armazenamento.prefixo + METAS_CHAVE) return;
  const ativo = document.activeElement;
  if (goalList.contains(ativo) && ativo.matches("input[type=text], textarea")) return;
  renderGoals();
});

renderGoals();

// NOTAS E DESEMPENHO

const PERF_CHAVE = "desempenho";
const PERF_CORES = ["#5b2a9e", "#c02408", "#078326", "#0b6fd1", "#b45f00", "#107769", "#c2185b", "#455a64"];
const PERF_FORMAS = ["circulo", "quadrado", "losango", "triangulo"]; // a cor não é o único sinal
const SVG_NS = "http://www.w3.org/2000/svg";

const perfChart = document.getElementById("perfChart");
const perfLegend = document.getElementById("perfLegend");
const perfList = document.getElementById("perfList");
const perfMsg = document.getElementById("perfMsg");
const perfMin = document.getElementById("perfMin");
const perfMax = document.getElementById("perfMax");
const perfAvgChk = document.getElementById("perfAvgChk");
const perfTopicForm = document.getElementById("perfTopicForm");
const perfTopicName = document.getElementById("perfTopicName");

const perfOpen = new Set(); // tópicos abertos (estado da tela, não é salvo)
let perfFocoForcado = null;
let perfMsgTimer;
let perfLarg = 0;

// Lê sempre do LocalStorage, para não sobrescrever alterações feitas em outra aba
function lerPerf() {
  const d = Armazenamento.ler(PERF_CHAVE) || {};
  const min = Number(d.escala && d.escala.min);
  const max = Number(d.escala && d.escala.max);
  const topicos = (Array.isArray(d.topicos) ? d.topicos : [])
    .filter((t) => t && typeof t.id === "string" && typeof t.nome === "string")
    .map((t) => ({
      ...t,
      registros: (Array.isArray(t.registros) ? t.registros : [])
        .filter((r) => r && typeof r.data === "string" && r.valor !== "" && Number.isFinite(Number(r.valor)))
        .map((r) => ({ ...r, valor: Number(r.valor) })),
    }));
  return {
    versao: 1,
    escala: Number.isFinite(min) && Number.isFinite(max) && min < max ? { min, max } : { min: 0, max: 10 },
    mostrarMedias: !!d.mostrarMedias,
    topicos,
  };
}

// estrutural = true redesenha a lista inteira; false só atualiza resumos e gráfico (edição no lugar)
function mudarPerf(alterar, estrutural = true) {
  const dados = lerPerf();
  alterar(dados);
  if (!Armazenamento.salvar(PERF_CHAVE, dados)) {
    alert("Não foi possível salvar as notas neste navegador.");
  }
  if (estrutural) renderTopicos();
  else atualizarResumos();
  renderGrafico();
}

function aviso(texto) {
  perfMsg.textContent = texto;
  clearTimeout(perfMsgTimer);
  if (texto) perfMsgTimer = setTimeout(() => (perfMsg.textContent = ""), 6000);
}

const fmtNum = (n) => Number(n).toLocaleString("pt-BR", { maximumFractionDigits: 2 });
const corTopico = (t) => PERF_CORES[(t.corIdx || 0) % PERF_CORES.length];
const formaTopico = (t) => PERF_FORMAS[(t.corIdx || 0) % PERF_FORMAS.length];
const contagemRegistros = (t) => `${t.registros.length} ${t.registros.length === 1 ? "registro" : "registros"}`;

function mediaTopico(t) {
  return t.registros.length ? t.registros.reduce((s, r) => s + r.valor, 0) / t.registros.length : null;
}

function textoMedia(t) {
  const m = mediaTopico(t);
  return m === null ? "Sem registros" : `Média ${fmtNum(m)}`;
}

function svgEl(tag, attrs = {}, texto) {
  const e = document.createElementNS(SVG_NS, tag);
  Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v));
  if (texto !== undefined) e.textContent = texto;
  return e;
}

function marcador(forma, cor, x, y, r) {
  const a = { fill: cor, stroke: "#fff", "stroke-width": 1.5 };
  if (forma === "quadrado") return svgEl("rect", { ...a, x: x - r, y: y - r, width: 2 * r, height: 2 * r });
  if (forma === "losango")
    return svgEl("polygon", { ...a, points: `${x},${y - r - 1} ${x + r + 1},${y} ${x},${y + r + 1} ${x - r - 1},${y}` });
  if (forma === "triangulo")
    return svgEl("polygon", { ...a, points: `${x},${y - r - 1} ${x + r + 1},${y + r} ${x - r - 1},${y + r}` });
  return svgEl("circle", { ...a, cx: x, cy: y, r });
}

function amostra(t) {
  const s = svgEl("svg", { width: 16, height: 16, viewBox: "0 0 16 16", "aria-hidden": "true" });
  s.append(marcador(formaTopico(t), corTopico(t), 8, 8, 5));
  return s;
}

function passoBonito(faixa) {
  const bruto = faixa / 5;
  const mag = Math.pow(10, Math.floor(Math.log10(bruto)));
  const n = bruto / mag;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * mag;
}

const tempoDe = (iso) => {
  const [a, m, d] = iso.split("-").map(Number);
  return Date.UTC(a, m - 1, d);
};

function renderGrafico() {
  const dados = lerPerf();
  const ativo = document.activeElement;
  const foco = ativo && ativo.dataset ? ativo.dataset.foco : null;

  // Legenda: cada item mostra ou oculta a linha do tópico e exibe a média
  perfLegend.innerHTML = "";
  dados.topicos.forEach((t) => {
    const oculto = t.visivel === false;
    const b = criar("button", oculto ? "perfLeg off" : "perfLeg");
    b.type = "button";
    b.dataset.foco = `leg:${t.id}`;
    b.setAttribute("aria-pressed", String(!oculto));
    b.title = oculto ? "Mostrar linha no gráfico" : "Ocultar linha do gráfico";
    b.append(amostra(t), criar("span", "perfLegName", t.nome), criar("span", "perfLegAvg", textoMedia(t)));
    b.addEventListener("click", () =>
      mudarPerf((d) => {
        const x = d.topicos.find((y) => y.id === t.id);
        if (x) x.visivel = x.visivel === false;
      }, false),
    );
    perfLegend.appendChild(b);
  });
  if (foco && foco.startsWith("leg:")) {
    const alvo = perfLegend.querySelector(`[data-foco="${foco}"]`);
    if (alvo) alvo.focus();
  }

  const visiveis = dados.topicos.filter((t) => t.visivel !== false && t.registros.length);
  const largura = Math.max(260, perfChart.clientWidth - 16);
  perfChart.innerHTML = "";
  if (!visiveis.length) {
    perfChart.appendChild(
      criar(
        "p",
        "perfEmpty",
        dados.topicos.length
          ? "Nenhum registro visível. Adicione notas ou mostre um tópico na legenda."
          : "Crie um tópico e registre suas notas para ver o gráfico.",
      ),
    );
    return;
  }

  const w = largura;
  const h = Math.round(Math.min(400, Math.max(240, w * 0.5)));
  const m = { e: 42, d: 22, t: 14, b: 32 };
  const pw = w - m.e - m.d;
  const ph = h - m.t - m.b;
  const todos = visiveis.flatMap((t) => t.registros);
  const lo = Math.min(dados.escala.min, ...todos.map((r) => r.valor));
  const hi = Math.max(dados.escala.max, ...todos.map((r) => r.valor));
  const tempos = todos.map((r) => tempoDe(r.data));
  const t0 = Math.min(...tempos);
  const t1 = Math.max(...tempos);
  const X = (iso) => m.e + (t1 === t0 ? pw / 2 : ((tempoDe(iso) - t0) / (t1 - t0)) * pw);
  const Y = (v) => m.t + ph - ((v - lo) / (hi - lo)) * ph;

  const svg = svgEl("svg", {
    viewBox: `0 0 ${w} ${h}`,
    width: w,
    height: h,
    role: "img",
    "aria-label": "Gráfico de linhas com a evolução das notas ao longo do tempo, uma linha por tópico",
  });

  // Eixo Y (desempenho) e linhas de grade
  const passo = passoBonito(hi - lo);
  for (let k = Math.ceil(lo / passo - 1e-9); k * passo <= hi + 1e-9; k++) {
    const v = Number((k * passo).toFixed(6));
    const y = Y(v);
    svg.append(
      svgEl("line", { x1: m.e, x2: m.e + pw, y1: y, y2: y, stroke: "#dcdfe4", "stroke-width": 1 }),
      svgEl("text", { x: m.e - 6, y: y + 4, "text-anchor": "end", "font-size": 11, fill: "#4d5155" }, fmtNum(v)),
    );
  }
  svg.append(
    svgEl("line", { x1: m.e, x2: m.e, y1: m.t, y2: m.t + ph, stroke: "#858b91" }),
    svgEl("line", { x1: m.e, x2: m.e + pw, y1: m.t + ph, y2: m.t + ph, stroke: "#858b91" }),
  );

  // Eixo X (datas dos registros), sem rótulos sobrepostos
  const longo = t1 - t0 > 300 * 864e5;
  let ultimoX = -Infinity;
  [...new Set(todos.map((r) => r.data))].sort().forEach((d) => {
    const x = X(d);
    if (x - ultimoX < (longo ? 68 : 50)) return;
    ultimoX = x;
    const rotulo = longo ? `${d.slice(8, 10)}/${d.slice(5, 7)}/${d.slice(2, 4)}` : `${d.slice(8, 10)}/${d.slice(5, 7)}`;
    svg.append(svgEl("text", { x, y: h - 10, "text-anchor": "middle", "font-size": 11, fill: "#4d5155" }, rotulo));
  });

  // Uma linha independente por tópico, com cor e forma próprias
  visiveis.forEach((t) => {
    const cor = corTopico(t);
    const regs = [...t.registros].sort((a, b) => a.data.localeCompare(b.data) || (a.criadoEm || 0) - (b.criadoEm || 0));
    if (dados.mostrarMedias) {
      const y = Y(mediaTopico(t));
      svg.append(
        svgEl("line", { x1: m.e, x2: m.e + pw, y1: y, y2: y, stroke: cor, "stroke-width": 1.5, "stroke-dasharray": "6 4", opacity: 0.8 }),
      );
    }
    if (regs.length > 1) {
      const d = regs.map((r, i) => `${i ? "L" : "M"}${X(r.data)} ${Y(r.valor)}`).join(" ");
      svg.append(svgEl("path", { d, fill: "none", stroke: cor, "stroke-width": 2.5, "stroke-linejoin": "round" }));
    }
    regs.forEach((r) => {
      const mk = marcador(formaTopico(t), cor, X(r.data), Y(r.valor), 4.5);
      mk.append(svgEl("title", {}, `${t.nome}: ${fmtNum(r.valor)} em ${formatarData(r.data)}`));
      svg.append(mk);
    });
  });
  perfChart.appendChild(svg);
}

function criarRegistro(t, r, escala) {
  const linha = criar("div", "perfRec");
  const data = criar("input");
  data.type = "date";
  data.value = r.data;
  data.setAttribute("aria-label", "Data do registro");
  const valor = criar("input");
  valor.type = "number";
  valor.step = "any";
  valor.value = r.valor;
  valor.setAttribute("aria-label", "Nota do registro");
  let anterior = { data: r.data, valor: r.valor };

  const salvar = () => {
    const v = Number(valor.value);
    if (valor.value === "" || !Number.isFinite(v) || !data.value) {
      valor.value = anterior.valor;
      data.value = anterior.data;
      return;
    }
    if (v < escala.min || v > escala.max) {
      aviso(`A nota deve ficar entre ${fmtNum(escala.min)} e ${fmtNum(escala.max)}.`);
      valor.value = anterior.valor;
      return;
    }
    aviso("");
    anterior = { data: data.value, valor: v };
    mudarPerf((d) => {
      const x = d.topicos.find((y) => y.id === t.id);
      const reg = x && x.registros.find((y) => y.id === r.id);
      if (reg) {
        reg.valor = v;
        reg.data = data.value;
      }
    }, false);
  };
  valor.addEventListener("change", salvar);
  data.addEventListener("change", salvar);

  const excluir = criar("button", "perfMini", "×");
  excluir.type = "button";
  excluir.setAttribute("aria-label", `Excluir registro de ${formatarData(r.data)}`);
  excluir.addEventListener("click", () =>
    mudarPerf((d) => {
      const x = d.topicos.find((y) => y.id === t.id);
      if (x) x.registros = x.registros.filter((y) => y.id !== r.id);
    }),
  );

  linha.append(data, valor, excluir);
  return linha;
}

function criarTopico(t, escala) {
  const cartao = criar("details", "perfTopic");
  cartao.open = perfOpen.has(t.id);
  cartao.style.setProperty("--cor", corTopico(t));
  cartao.addEventListener("toggle", () => {
    if (cartao.open) perfOpen.add(t.id);
    else perfOpen.delete(t.id);
  });

  const resumo = criar("summary");
  const linhaResumo = criar("div", "perfSummary");
  const nome = criar("span", "perfName", t.nome);
  nome.dataset.nome = t.id;
  const media = criar("span", "perfAvg", textoMedia(t));
  media.dataset.media = t.id;
  const qtd = criar("span", "perfCount", contagemRegistros(t));
  qtd.dataset.contagem = t.id;
  linhaResumo.append(amostra(t), nome, media, qtd);
  resumo.appendChild(linhaResumo);
  cartao.appendChild(resumo);

  const corpo = criar("div", "perfRows");

  // Renomear e excluir o tópico
  const linhaNome = criar("div", "perfNameRow");
  const campoNome = criar("input", "perfNameInput");
  campoNome.type = "text";
  campoNome.maxLength = 40;
  campoNome.value = t.nome;
  campoNome.setAttribute("aria-label", "Nome do tópico");
  campoNome.addEventListener("input", () => {
    const novo = campoNome.value.trim();
    if (!novo) return;
    mudarPerf((d) => {
      const x = d.topicos.find((y) => y.id === t.id);
      if (x) x.nome = novo;
    }, false);
  });
  campoNome.addEventListener("blur", () => {
    if (!campoNome.value.trim()) campoNome.value = lerPerf().topicos.find((y) => y.id === t.id)?.nome || t.nome;
  });
  const excluirTopico = criar("button", "perfMini", "Excluir tópico");
  excluirTopico.type = "button";
  excluirTopico.addEventListener("click", () => {
    if (!confirm(`Excluir o tópico "${t.nome}" e todos os seus registros?`)) return;
    mudarPerf((d) => {
      d.topicos = d.topicos.filter((y) => y.id !== t.id);
    });
  });
  linhaNome.append(campoNome, excluirTopico);
  corpo.appendChild(linhaNome);

  // Registros (editáveis no lugar) e formulário para adicionar
  const lista = criar("div", "perfRecs");
  [...t.registros]
    .sort((a, b) => b.data.localeCompare(a.data) || (b.criadoEm || 0) - (a.criadoEm || 0))
    .forEach((r) => lista.appendChild(criarRegistro(t, r, escala)));
  if (!t.registros.length) lista.appendChild(criar("p", "perfEmpty", "Nenhum registro ainda."));
  corpo.appendChild(lista);

  const form = criar("form", "perfAddRec");
  const campoValor = criar("input");
  campoValor.type = "number";
  campoValor.step = "any";
  campoValor.required = true;
  campoValor.min = escala.min;
  campoValor.max = escala.max;
  campoValor.placeholder = `${fmtNum(escala.min)} a ${fmtNum(escala.max)}`;
  campoValor.dataset.foco = `nota:${t.id}`;
  campoValor.setAttribute("aria-label", `Nota em ${t.nome}`);
  const campoData = criar("input");
  campoData.type = "date";
  campoData.required = true;
  campoData.value = dataISO();
  campoData.setAttribute("aria-label", "Data do novo registro");
  const adicionar = criar("button", "perfMini", "Adicionar");
  adicionar.type = "submit";
  form.append(campoValor, campoData, adicionar);
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const v = Number(campoValor.value);
    if (campoValor.value === "" || !Number.isFinite(v) || !campoData.value) return;
    perfFocoForcado = `nota:${t.id}`;
    mudarPerf((d) => {
      const x = d.topicos.find((y) => y.id === t.id);
      if (x) x.registros.push({ id: novoId("nota"), valor: v, data: campoData.value, criadoEm: Date.now() });
    });
  });
  corpo.appendChild(form);

  cartao.appendChild(corpo);
  return cartao;
}

function renderTopicos() {
  const dados = lerPerf();
  const ativo = document.activeElement;
  const foco = perfFocoForcado || (ativo && perfList.contains(ativo) && ativo.dataset ? ativo.dataset.foco : null);
  perfFocoForcado = null;
  const rolagem = perfList.scrollTop;

  if (document.activeElement !== perfMin) perfMin.value = dados.escala.min;
  if (document.activeElement !== perfMax) perfMax.value = dados.escala.max;
  perfAvgChk.checked = dados.mostrarMedias;

  perfList.innerHTML = "";
  if (!dados.topicos.length) {
    perfList.appendChild(criar("p", "perfEmpty", "Nenhum tópico ainda."));
  }
  dados.topicos.forEach((t) => perfList.appendChild(criarTopico(t, dados.escala)));

  perfList.scrollTop = rolagem;
  if (foco) {
    const alvo = perfList.querySelector(`[data-foco="${foco}"]`);
    if (alvo) alvo.focus();
  }
}

// Edição no lugar: atualiza nome, média e contagem sem redesenhar os campos
function atualizarResumos() {
  lerPerf().topicos.forEach((t) => {
    const definir = (attr, texto) => {
      const e = perfList.querySelector(`[${attr}="${t.id}"]`);
      if (e) e.textContent = texto;
    };
    definir("data-nome", t.nome);
    definir("data-media", textoMedia(t));
    definir("data-contagem", contagemRegistros(t));
  });
}

function mudarEscala() {
  const min = Number(perfMin.value);
  const max = Number(perfMax.value);
  if (perfMin.value === "" || perfMax.value === "" || !(min < max)) {
    const atual = lerPerf().escala;
    perfMin.value = atual.min;
    perfMax.value = atual.max;
    aviso("A escala precisa ter o mínimo menor que o máximo.");
    return;
  }
  mudarPerf((d) => {
    d.escala = { min, max };
  });
  const fora = lerPerf()
    .topicos.flatMap((t) => t.registros)
    .filter((r) => r.valor < min || r.valor > max).length;
  aviso(fora ? `${fora} ${fora === 1 ? "registro está" : "registros estão"} fora da nova escala. Continuam no gráfico.` : "");
}

perfMin.addEventListener("change", mudarEscala);
perfMax.addEventListener("change", mudarEscala);

perfAvgChk.addEventListener("change", () =>
  mudarPerf((d) => {
    d.mostrarMedias = perfAvgChk.checked;
  }, false),
);

perfTopicForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const nome = perfTopicName.value.trim();
  if (!nome) return;
  const id = novoId("topico");
  perfOpen.add(id); // o tópico novo já abre, pronto para receber notas
  perfFocoForcado = `nota:${id}`;
  mudarPerf((d) => {
    const usados = new Set(d.topicos.map((t) => t.corIdx));
    let corIdx = 0;
    while (usados.has(corIdx)) corIdx++;
    d.topicos.push({ id, nome, corIdx, visivel: true, registros: [] });
  });
  perfTopicForm.reset();
});

// Outra aba alterou os dados: atualiza, sem interromper quem está digitando aqui
window.addEventListener("storage", (evento) => {
  if (evento.key !== Armazenamento.prefixo + PERF_CHAVE) return;
  const ativo = document.activeElement;
  if (!(ativo && perfList.contains(ativo) && ativo.matches("input"))) renderTopicos();
  renderGrafico();
});

// O gráfico se redesenha quando a largura do cartão muda
function ajustarGrafico() {
  if (perfChart.clientWidth !== perfLarg) {
    perfLarg = perfChart.clientWidth;
    renderGrafico();
  }
}
if ("ResizeObserver" in window) new ResizeObserver(ajustarGrafico).observe(perfChart);
else window.addEventListener("resize", ajustarGrafico);

renderTopicos();
renderGrafico();
perfLarg = perfChart.clientWidth;
