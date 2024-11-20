import { updateWeatherData } from "./updateWeatherData.js";
import { updateSuggestedLocs } from "./display.js";

const btn = document.querySelector(".btn");
const input = document.querySelector("[data-input]");

let city = "Manila"

window.onload = () => {
    updateWeatherData(city);
};

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("suggested-loc")) {
        city = e.target.innerText
        updateWeatherData(city);
    }
})

btn.addEventListener("click", async () => {

    city = input.value.toLowerCase();
    const data = await updateWeatherData(city);
    updateSuggestedLocs(city, data);
    console.log(data.location.name);

    if (!data || !data.location ||
        (data.location.name.toLowerCase() !== city && (data.location.country.toLowerCase() !== city && data.location.region.toLowerCase() !== city && !data.location.country.toLowerCase().includes(city)))) {
        alert(`Didn't find data`);
        return null;
    }
    input.value = "";
});






export { city, input };