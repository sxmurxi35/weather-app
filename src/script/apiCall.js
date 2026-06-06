import displayWeatherInfo from "./display.js";

export default async function getWeather(city, metric) {
  let unit = undefined;
  if (metric == true) {
    unit = "metric";
  } else if (metric == false) {
    unit = "us";
  }

  const getWeatherForCity = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=SJKMCFUUNKK6NVBRL8KCDEZLK&contentType=json`,
  );
  const result = await getWeatherForCity.json();

  // console.log(result);

  return result;
}
