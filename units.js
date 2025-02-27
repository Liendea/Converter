const cups_button = document.querySelector("#cups-button");
const dl_button = document.querySelector("#dl-button");
const cups_table = document.querySelector("#cups-table");
const dl_table = document.querySelector("#dl-table");

cups_button.addEventListener("click", () => {
  cups_table.classList.add("hidden");
  dl_table.classList.add("active");
  cups_table.classList.remove("active");
  dl_table.classList.remove("hidden");

  cups_button.classList.add("active");
  dl_button.classList.remove("active");
});

dl_button.addEventListener("click", () => {
  dl_table.classList.add("hidden");
  cups_table.classList.add("active");
  dl_table.classList.remove("active");
  cups_table.classList.remove("hidden");

  dl_button.classList.add("active");
  cups_button.classList.remove("active");
});

// Konverterare

let inputField = document.getElementById("weight-input");
inputField.addEventListener("keydown", function () {
  let inputValue = inputField.value;

  //Konvertera från dl till cup
  if (dl_button.classList.contains("active")) {
    let cups = (inputValue * 2.20462).toFixed(3);
    document.getElementById("cups-result").innerText = `${cups} `;
    let stone = (cups * 0.071428571).toFixed(3);
    document.getElementById("stone-result").innerText = `${stone}`;
    let ounce = (cups * 16).toFixed(3);
    document.getElementById("ounces-result").innerText = `${ounce}`;

    //Konvertera från cups till dl
  } else if (cups_button.classList.contains("active")) {
    let dl = (inputValue / 2.20462).toFixed(3);
    document.getElementById("dl-result").innerText = `${dl}`;
    let hekto = (dl * 10).toFixed(3);
    document.getElementById("hg-result").innerText = `${hekto}`;
    let gram = (dl * 1000).toFixed(3);
    document.getElementById("g-result").innerText = `${gram}`;
  }
});
