import "./style/style.css";
import getWeather from "./script/apiCall.js";

getWeather("chwaliszow", true);

let unit = true;

const searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", () => {
  const input = document.querySelector("#cityInput");
  const city = input.value;

  getWeather(city, unit);
  input.setAttribute("placeholder", city);
  input.value = "";
});

const unitToggle = document.querySelector("#unitSwitch");

window.addEventListener("load", () => {
  unitToggle.checked = false;
});

unitToggle.addEventListener("change", () => {
  if (unitToggle.checked) {
    unit = false;
    document.querySelector(".celsius").classList.toggle("selected");
    document.querySelector(".fahrenheit").classList.toggle("selected");
  } else if (!unitToggle.checked) {
    unit = true;
    document.querySelector(".celsius").classList.toggle("selected");
    document.querySelector(".fahrenheit").classList.toggle("selected");
  }
});
