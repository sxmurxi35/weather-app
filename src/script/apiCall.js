export default async function getWeather(city, metric) {
  let unit = metric ? "metric" : "us";
  try {
    const getWeatherForCity = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=MSLWS33KW8SLJNQT3NCCUNP9X&contentType=json`,
    );

    const result = await getWeatherForCity.json();

    return result;
  } catch {
    throw error;
  }
}
