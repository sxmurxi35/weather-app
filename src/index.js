import "./style/style.css";
import getWeather from "./script/apiCall.js";
import displayWeatherInfo from "./script/display.js";

getWeather("warsaw", true);

let unit = true;
let city = "warsaw";

const searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", async () => {
  const input = document.querySelector("#cityInput");
  city = input.value;

  const weatherInfo = await getWeather(city, unit);
  input.setAttribute("placeholder", city);
  input.value = "";
  displayWeatherInfo(weatherInfo);
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

  const main = document.querySelector("main");
  if (main.textContent != "") {
    getWeather(city, unit);
    displayWeatherInfo(weatherInfo);
  }
});
