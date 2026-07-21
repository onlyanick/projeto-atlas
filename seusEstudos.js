const Applications = [
  {
    id: "educationusa",
    name: "EducationUSA",
    logo: ".Imagens/edusalogo.png",
    alt: "Logo EducationUSA",
    application: [0, 10, 11],
  },
  {
    id: "prep-program",
    name: "Fundação Estudar - Prep Program",
    logo: ".Imagens/estudarlogo.png",
    alt: "Logo Fundação Estudar",
    application: [6],
  },
  {
    id: "instituto-ponte",
    name: "Instituto Ponte",
    logo: ".Imagens/IPlogo.png",
    alt: "Logo Instituto Ponte",
    application: [0, 1, 2],
  },
  {
    id: "obecon",
    name: "Olimpíada Brasileira de Economia (Inscrições)",
    logo: ".Imagens/obeconlogo.png",
    alt: "Logo OBECON",
    application: [3, 4],
  },
  {
    id: "obf",
    name: "Olimpíada Brasileira de Física (Inscrições)",
    logo: ".Imagens/obflogo.png",
    alt: "Logo OBF",
    application: [3, 4],
  },
  {
    id: "obl",
    name: "Olimpíada Brasileira de Linguística (Inscrições)",
    logo: ".Imagens/obllogo.png",
    alt: "Logo OBL",
    application: [4],
  },
  {
    id: "omu",
    name: "Olimpíada de Matemática da Unicamp (Inscrições)",
    logo: ".Imagens/omulogo.png",
    alt: "Logo OMU",
    application: [1, 2],
  },
  {
    id: "onhb",
    name: "Olimpíada Nacional em História do Brasil (Inscrições)",
    logo: ".Imagens/onhblogo.png",
    alt: "Logo ONHB",
    application: [1, 2, 3],
  },
  {
    id: "quimeninas",
    name: "Quimeninas (Inscrições)",
    logo: ".Imagens/quimeninaslogo.png",
    alt: "Logo Quimeninas",
    application: [6, 7, 8],
  },
  {
    id: "uwc",
    name: "United World Colleges",
    logo: ".Imagens/UWClogo.png",
    alt: "Logo UWC",
    application: [7, 8],
  },
  {
    id: "escola-de-talentos",
    name: "Escola de Talentos - Instituto Principia",
    logo: ".Imagens/principialogo.png",
    alt: "Instituto Principia",
    application: [1, 2],
  },
  {
    id: "peti",
    name: "PETI-OBM",
    logo: ".Imagens/petilogo.png",
    alt: "PETI",
    application: [10, 11],
  },
  {
    id: "inspire",
    name: "Inspire - Instituto Selma Paschine",
    logo: ".Imagens/inspirelogo.png",
    application: [6, 7],
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
      calendar.innerHTML += `<a href="Oportunidades/${id}.html"> <div class="applyCard">
      <img src=".Imagens/${id}-logo.png" alt="">
      <p>${name}</p>
    </div>
    </a>
      `;
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

async function runTime() {
  if (timeLeft <= 0) {
    clearInterval(interval);

    if (isBreakOn) {
      pomosDone++;
      pomoCounter.innerText = `Ciclos completos: ${pomosDone}/4`;
    }

    timeDisplay.innerText = `Tempo finalizado!`;
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (isTimeOn && pomosDone < 4) {
      isBreakOn = true;
      isTimeOn = false;
      focusP.innetText = "Tempo de intervalo";
      timeLeft = Number(breakTimer.value * 60);
      interval = setInterval(runTime, 1000);
    } else if (isBreakOn && pomosDone < 3) {
      isBreakOn = false;
      isTimeOn = true;
      focusP.innetText = "Tempo de foco";
      timeLeft = Number(pomoTimer.value) * 60;
      interval = setInterval(runTime, 1000);
    } else {
      timeDisplay.innetText = `Ciclos completos!`;
      await new Promise((resolve) => setTimeout(resolve, 1000));

      isTimeOn = false;
      timeLeft = 0;
      pomoTimer.style.display = "block";
      breakTimer.style.display = "block";
      pomoCounter.style.display = "block";
      breakP.style.display = "block";
      startBtn.innerText = "Começar";
      timeDisplay.innetText = "";
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
  timeDisplay.innetText = "";
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
