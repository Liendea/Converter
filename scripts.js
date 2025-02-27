const LBS_button = document.querySelector("#LBS-button");
const KG_button = document.querySelector("#KG-button");
const LBS_table = document.querySelector("#LBS-table");
const KG_table = document.querySelector("#KG-table");

// Table resultat element
let lbs_result = document.getElementById("lbs-result");
let stone_result = document.getElementById("stone-result");
let ounce_result = document.getElementById("ounces-result");

let kg_result = document.getElementById("kg-result");
let hg_result = document.getElementById("hg-result");
let g_result = document.getElementById("g-result");

// Knapptryck
LBS_button.addEventListener("click", () => {
  LBS_table.classList.add("hidden");
  KG_table.classList.add("active");
  LBS_table.classList.remove("active");
  KG_table.classList.remove("hidden");

  LBS_button.classList.add("active");
  KG_button.classList.remove("active");

  // Töm inputfältet och ändra placeholdern
  inputField.value = "";
  inputField.placeholder = "Type weight in LBS...";

  // Töm resultatfältet när knapp trycks
  let dt = document.querySelectorAll("td");
  dt.forEach((element) => {
    element.textContent = "";
  });
});

// Knapptryck
KG_button.addEventListener("click", () => {
  KG_table.classList.add("hidden");
  LBS_table.classList.add("active");
  KG_table.classList.remove("active");
  LBS_table.classList.remove("hidden");

  KG_button.classList.add("active");
  LBS_button.classList.remove("active");

  // Töm inputfältet och ändra placeholdern
  inputField.value = "";
  inputField.placeholder = "Type weight in KG...";

  // Töm resultatfältet när knapp trycks
  let dt = document.querySelectorAll("td");
  dt.forEach((element) => {
    element.textContent = "";
  });
});

// Konverterare
let inputField = document.getElementById("weight-input");
inputField.addEventListener("input", function () {
  let inputValue = inputField.value;

  //Konvertera från KG till LBS
  if (KG_button.classList.contains("active")) {
    let lbs = (inputValue * 2.20462).toFixed(3);
    lbs_result.innerText = `${lbs} `;
    let stone = (lbs * 0.071428571).toFixed(3);
    stone_result.innerText = `${stone}`;
    let ounce = (lbs * 16).toFixed(3);
    ounce_result.innerText = `${ounce}`;

    //Konvertera från LBS till KG
  } else if (LBS_button.classList.contains("active")) {
    let kg = (inputValue / 2.20462).toFixed(3);
    kg_result.innerText = `${kg}`;
    let hekto = (kg * 10).toFixed(3);
    hg_result.innerText = `${hekto}`;
    let gram = (kg * 1000).toFixed(3);
    g_result.innerText = `${gram}`;
  }
});

// To-do
// Skapa drop down där man kan välja från vilken enhet man vill konvertera istället för endast tvp knappval.
