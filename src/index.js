import "./style/style.css";
import getWeather from "./script/apiCall.js";

getWeather("chwaliszow", true);

const searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", () => {
  const input = document.querySelector("#cityInput");
  const city = input.value;

  getWeather(city, true);
  input.setAttribute("placeholder", city);
  input.value = "";
});
