import "../style/main.css";
import clearNightIcon from "../icons/weather-icons/clear-night.svg";
import cloudyIcon from "../icons/weather-icons/cloudy.svg";
import fogIcon from "../icons/weather-icons/fog.svg";
import partlyCloudyDayIcon from "../icons/weather-icons/partly-cloudy-day.svg";
import partlyCloudyNightIcon from "../icons/weather-icons/partly-cloudy-night.svg";
import rainIcon from "../icons/weather-icons/rain.svg";
import snowIcon from "../icons/weather-icons/snow.svg";
import sunnyIcon from "../icons/weather-icons/sunny.svg";
import windIcon from "../icons/weather-icons/wind.svg";

import humidityIcon from "../icons/weather-icons/humidity.svg";
import precipitationIcon from "../icons/weather-icons/umbrella.svg";

function displayWeatherInfo(obj, unit) {
  const main = document.querySelector("main");
  main.textContent = "";

  const weatherInfo = obj;

  let unitSymbol = undefined;
  if (unit == true) {
    unitSymbol = "C";
  } else if (unit == false) {
    unitSymbol = "F";
  }

  const weatherIcons = {
    "clear-night": clearNightIcon,
    cloudy: cloudyIcon,
    fog: fogIcon,
    "partly-cloudy-day": partlyCloudyDayIcon,
    "partly-cloudy-night": partlyCloudyNightIcon,
    rain: rainIcon,
    snow: snowIcon,
    clear: sunnyIcon,
    wind: windIcon,
  };

  const weatherSect = createElement("sect");
  weatherSect.classList.add("weather-sect");

  const weatherIconSect = createElement("sect");
  const icon = createElement("img");
  icon.src = weatherIcons[obj.currentConditions.icon];
  console.log(obj.currentConditions.icon);
  icon.classList.add("weather-icon");
  weatherIconSect.classList.add("weather-icon-sect");
  weatherIconSect.append(icon);

  console.log(weatherInfo);

  const tempHeading = createElement("h1");
  tempHeading.textContent =
    weatherInfo.currentConditions.temp + ` °${unitSymbol}`;

  const cityName = createElement("h3");
  cityName.textContent = weatherInfo.address;

  const weatherDesc = createElement("p");
  weatherDesc.textContent = weatherInfo.description;
  weatherDesc.classList.add("weather-desc");

  const humiditySect = createElement("sect");
  const humiIcon = createElement("img");
  humiIcon.src = humidityIcon;

  const humidityPercentage = createElement("p");
  humidityPercentage.textContent =
    weatherInfo.currentConditions.humidity + " %";
  humiditySect.classList.add("humidity-sect");

  humiditySect.append(humiIcon, humidityPercentage);

  const precipitationSect = createElement("sect");
  const precipIcon = createElement("img");
  precipIcon.src = precipitationIcon;
  precipitationSect.classList.add("precip-sect");

  const precipPercentage = createElement("p");
  precipPercentage.textContent =
    weatherInfo.currentConditions.precipprob + " %";

  precipitationSect.append(precipIcon, precipPercentage);

  const rightWeatherSection = createElement("sect");
  rightWeatherSection.classList.add("right-weather-sect");
  rightWeatherSection.append(
    tempHeading,
    cityName,
    weatherDesc,
    humiditySect,
    precipitationSect,
  );
  console.log(weatherInfo.currentConditions.precipprob);

  weatherSect.append(weatherIconSect, rightWeatherSection);
  main.append(weatherSect);
  console.log(obj);
}

function createElement(selector) {
  const element = document.createElement(selector);
  return element;
}

function displayError() {
  const main = document.querySelector("main");
  main.textContent = "";

  const errorSect = createElement("sect");
  errorSect.classList.add("error-sect");

  const errorHeading = createElement("h1");
  errorHeading.textContent = "There was some error caught";

  const errorMessageSect = createElement("sect");
  errorMessageSect.classList.add("error-message-sect");

  const errorMessageMain = createElement("p");
  errorMessageMain.textContent =
    "Please make sure that you wrote correct city name.";

  const errorMessageAdd = createElement("p");
  errorMessageAdd.textContent = "You might need to refresh the page.";

  const refreshButton = createElement("button");
  refreshButton.textContent = "Refresh";
  refreshButton.setAttribute("onClick", "window.location.reload()");

  errorMessageSect.append(errorMessageMain, errorMessageAdd, refreshButton);

  errorSect.append(errorHeading, errorMessageSect);
  main.append(errorSect);
}

export { displayWeatherInfo, displayError };
