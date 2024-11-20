import { fetchWeatherData } from "./fetchData.js";
import { handleData } from "./handleData.js";
import { displayData } from "./display.js";

const updateWeatherData = async (city) => {

    const data = await fetchWeatherData(city);
    if (data) {
        const dateFormat = handleData(data);
        displayData(data, dateFormat);
        return data;

    } else alert("Could not find weather data.");
};

export { updateWeatherData };    