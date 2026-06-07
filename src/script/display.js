import "../style/main.css";
import sunnyIcon from "../icons/weather-icons/sunny.svg";
import humidityIcon from "../icons/weather-icons/humidity.svg";
import precipitationIcon from "../icons/weather-icons/umbrella.svg";

export default function displayWeatherInfo(obj, unit) {
  const main = document.querySelector("main");
  main.textContent = "";

  const weatherInfo = obj;

  let unitSymbol = undefined;
  if (unit == true) {
    unitSymbol = "C";
  } else if (unit == false) {
    unitSymbol = "F";
  }

  const weatherSect = createElement("sect");
  weatherSect.classList.add("weather-sect");

  const weatherIconSect = createElement("sect");
  const icon = createElement("img");
  icon.src = sunnyIcon;
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
  weatherDesc.classList.add('weather-desc')

  const humiditySect = createElement("sect");
  const humiIcon = createElement("img");
  humiIcon.src = humidityIcon;

  const humidityPercentage = createElement("p");
  humidityPercentage.textContent =
    weatherInfo.currentConditions.humidity + " %";
  humiditySect.classList.add('humidity-sect')

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
}

function createElement(selector) {
  const element = document.createElement(selector);
  return element;
}
