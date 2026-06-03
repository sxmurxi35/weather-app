export default async function getWeather(city, metric) {

    let unit = undefined
    if (metric == true) {
        unit = "metric";
    } else if (metric == false) {
        unit = 'us'
    }

    const getWeatherForCity = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=SJKMCFUUNKK6NVBRL8KCDEZLK&contentType=json`,
  );
    const result = await getWeatherForCity.json()

    const toLog = [result.currentConditions.temp, result.currentConditions.conditions, city]

    console.log(toLog)
}

