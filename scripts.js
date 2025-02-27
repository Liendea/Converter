const LBS_button = document.querySelector("#LBS-button");
const KG_button = document.querySelector("#KG-button");
const LBS_table = document.querySelector("#LBS-table");
const KG_table = document.querySelector("#KG-table");

LBS_button.addEventListener("click", () => {
  LBS_table.classList.add("hidden");
  KG_table.classList.add("active");
  LBS_table.classList.remove("active");
  KG_table.classList.remove("hidden");

  LBS_button.classList.add("active");
  KG_button.classList.remove("active");
});

KG_button.addEventListener("click", () => {
  KG_table.classList.add("hidden");
  LBS_table.classList.add("active");
  KG_table.classList.remove("active");
  LBS_table.classList.remove("hidden");

  KG_button.classList.add("active");
  LBS_button.classList.remove("active");
});

// Konverterare

let inputField = document.getElementById("weight-input");
inputField.addEventListener("keydown", function () {
  let inputValue = inputField.value;

  //Konvertera från KG till LBS
  if (KG_button.classList.contains("active")) {
    let lbs = (inputValue * 2.20462).toFixed(3);
    document.getElementById("lbs-result").innerText = `${lbs} `;
    let stone = (lbs * 0.071428571).toFixed(3);
    document.getElementById("stone-result").innerText = `${stone}`;
    let ounce = (lbs * 16).toFixed(3);
    document.getElementById("ounces-result").innerText = `${ounce}`;

    //Konvertera från LBS till KG
  } else if (LBS_button.classList.contains("active")) {
    let kg = (inputValue / 2.20462).toFixed(3);
    document.getElementById("kg-result").innerText = `${kg}`;
    let hekto = (kg * 10).toFixed(3);
    document.getElementById("hg-result").innerText = `${hekto}`;
    let gram = (kg * 1000).toFixed(3);
    document.getElementById("g-result").innerText = `${gram}`;
  }
});
