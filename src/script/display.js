import "../style/main.css";
import sunnyIcon from "../icons/weather-icons/sunny.svg";
import humidityIcon from "../icons/weather-icons/humidity.svg";
import precipitationIcon from "../icons/weather-icons/umbrella.svg";

export default function displayWeatherInfo(obj) {
  const main = document.querySelector("main");
  main.textContent = "";

  const weatherInfo = obj;

  const weatherSect = createElement("sect");
  weatherSect.classList.add("weather-sect");

  const icon = createElement("img");
  icon.src = sunnyIcon;

  console.log(weatherInfo);

  const tempHeading = createElement("h1");
  tempHeading.textContent = weatherInfo.currentConditions.temp;

  const cityName = createElement("h3");
  cityName.textContent = weatherInfo.address;

  const weatherDesc = createElement("p");
  weatherDesc.textContent = weatherInfo.description;

  const humiditySect = createElement("sect");
  const humiIcon = createElement("img");
  humiIcon.src = humidityIcon;

  const humidityPercentage = createElement("p");
  humidityPercentage.textContent =
    weatherInfo.currentConditions.humidity + " %";

  humiditySect.append(humiIcon, humidityPercentage);

  const precipitationSect = createElement("sect");
  const precipIcon = createElement("img");
  precipIcon.src = precipitationIcon;

  const precipPercentage = createElement("p");
  precipPercentage.textContent =
    weatherInfo.currentConditions.precipprob + " %";

  precipitationSect.append(precipIcon, precipPercentage);

  const rightWeatherSection = createElement("sect");
  rightWeatherSection.append(
    tempHeading,
    cityName,
    weatherDesc,
    humiditySect,
    precipitationSect,
  );
  console.log(weatherInfo.currentConditions.precipprob);

  weatherSect.append(icon, rightWeatherSection);
  main.append(weatherSect);
}

function createElement(selector) {
  const element = document.createElement(selector);
  return element;
}
