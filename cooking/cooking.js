const cups_button = document.querySelector("#cups-button");
const dl_button = document.querySelector("#dl-button");
const cups_table = document.querySelector("#cups-table");
const dl_table = document.querySelector("#dl-table");
let inputField = document.getElementById("cooking-input");

// Visa rätt resultat tabellenligt knappval
// När cups knappen trycks ska dl resultat tabellen visas
cups_button.addEventListener("click", () => {
  cups_table.classList.add("hidden");
  dl_table.classList.add("active");
  cups_table.classList.remove("active");
  dl_table.classList.remove("hidden");

  cups_button.classList.add("active");
  dl_button.classList.remove("active");

  // Töm inputfältet och ändra placeholdern
  inputField.value = "";
  inputField.placeholder = "Enter units of cups...";

  // Töm resultatfältet när knapp trycks
  let dt = document.querySelectorAll("td");
  dt.forEach((element) => {
    element.textContent = "";
  });
});

// Visa rätt resultattabell enligt knappval
// När dl knappen trycks ska cups resultat tabellen visas
dl_button.addEventListener("click", () => {
  dl_table.classList.add("hidden");
  cups_table.classList.add("active");
  dl_table.classList.remove("active");
  cups_table.classList.remove("hidden");

  dl_button.classList.add("active");
  cups_button.classList.remove("active");

  // Töm inputfältet och ändra placeholdern
  inputField.value = "";
  inputField.placeholder = "Enter units of dl...";

  // Töm resultatfältet när knapp trycks
  let dt = document.querySelectorAll("td");
  dt.forEach((element) => {
    element.textContent = "";
  });
});

// Konverterare
inputField.addEventListener("input", function () {
  let inputValue = inputField.value;

  // OM dl knappen är intryckt så:
  // Konvertera från dl till cup
  if (dl_button.classList.contains("active")) {
    let cup = (inputValue / 2.37).toFixed(3);
    document.getElementById("cup-result").innerText = `${cup} `;
    let gallon = (cup * 0.0625).toFixed(3);
    document.getElementById("gallon-result").innerText = `${gallon}`;
    let quarts = (cup * 0.25).toFixed(3);
    document.getElementById("quarts-result").innerText = `${quarts}`;
    let pint = (cup * 0.5).toFixed(3);
    document.getElementById("pint-result").innerText = `${pint}`;
    let ounce = (cup * 8).toFixed(3);
    document.getElementById("ounce-result").innerText = `${ounce}`;

    // ANNARS OM cups knappen är intrycks så:
    // Konvertera från cups till dl
  } else if (cups_button.classList.contains("active")) {
    let dl = (inputValue * 2.37).toFixed(3);
    document.getElementById("dl-result").innerText = `${dl}`;
    let liter = (dl / 10).toFixed(3);
    document.getElementById("l-result").innerText = `${liter}`;
    let cl = (dl * 10).toFixed(3);
    document.getElementById("cl-result").innerText = `${cl}`;
    let ml = (dl * 100).toFixed(3);
    document.getElementById("ml-result").innerText = `${ml}`;
    let matsked = (dl * 6.67).toFixed(3);
    document.getElementById("msk-result").innerText = `${matsked}`;
    let tesked = (dl * 20).toFixed(3);
    document.getElementById("tsk-result").innerText = `${tesked}`;
  }
});

// To-do
// Skapa drop down där man kan välja från vilken enhet man vill konvertera istället för endast tvp knappval.
