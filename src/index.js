import "./style/style.css";
import getWeather from "./script/apiCall.js";
import { displayError, displayWeatherInfo } from "./script/display.js";

getWeather("warsaw", true);

let unit = true;
let city = "wroclaw";

const searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", async () => {
  const input = document.querySelector("#cityInput");
  city = input.value ? input.value : city;
  try {
    const weatherInfo = await getWeather(city, unit);
    input.setAttribute("placeholder", city);
    input.value = "";
    displayWeatherInfo(weatherInfo, unit);
  } catch {
    displayError();
  }
});

const unitToggle = document.querySelector("#unitSwitch");

window.addEventListener("load", async () => {
  unitToggle.checked = false;

  try {
    const weatherInfo = await getWeather(city, unit);
    displayWeatherInfo(weatherInfo, unit);
  } catch {
    displayError();
  }
});

unitToggle.addEventListener("change", async () => {
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
    try {
      const weatherInfo = await getWeather(city, unit);
      displayWeatherInfo(weatherInfo, unit);
    } catch {
      displayError();
    }
  }
});
