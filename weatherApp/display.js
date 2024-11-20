

const weatherBg = document.querySelector(".weather-bg");
const dayOfWeek = document.querySelector(".dayOfWeek");
const monthNdDay = document.querySelector(".monthNdDay");
const condition = document.querySelector(".condition");
const temp = document.querySelector(".temp");
const cityOutput = document.querySelector(".city")
const cloudOutput = document.querySelector(".cloudy");
const humidOutput = document.querySelector(".humid");
const windOutput = document.querySelector(".wind");
const rainOutput = document.querySelector(".rain");
const time = document.querySelector(".time")
let h1 = document.querySelector(".suggested-loc1")


const displayData = (data, dateFormat) => {

    console.log("Displaying data:", data);

    const { days, month, dayNum, newTime } = dateFormat;

    const { location, current } = data;
    cityOutput.innerText = `${location.name}, ${location.country}`;
    condition.innerText = current.condition.text;

    const humidity = current.humidity;
    let rainChance = 0;

    if (humidity > 80) {
        rainChance = 80;
    } else if (humidity > 60) {
        rainChance = 50;
    } else {
        rainChance = 10;
    }

    rainOutput.innerText = `${rainChance}%`

    temp.innerText = `${current.temp_c}°C`
    cloudOutput.innerText = `${current.cloud}%`
    humidOutput.innerText = `${humidity}%`
    windOutput.innerText = `${current.wind_kph}km/h`
    dayOfWeek.innerText = `${days}`;
    monthNdDay.innerText = `${month}, ${dayNum}`
    time.innerText = `${newTime}`

    let isDay = "day";

if (data.current.is_day === 0) {
    isDay = "night";
}

function weatherCond() {
    const conditions = data.current.condition.text.toLowerCase();

    if (conditions.includes("rain") || conditions.includes("mist")) return "rainy";
    if (conditions.includes("overcast") || conditions.includes("cloudy")) return "cloudy";
    if (conditions === "sunny" || conditions === "clear") return "clear";

    return ""; // Default return if no condition matches
}


const video = document.getElementById("background-video");
const videoSource = document.getElementById("video-source");

function updateBackgroundVideo() {
    const videoSrc = `${isDay}/${weatherCond()}.mp4`; 
    video.style.opacity = 0.4;
    
    setTimeout(() => { 
        videoSource.src = videoSrc;
        video.load();
        video.play();
        
        video.style.opacity = 1;
        video.style.transitionTimingFunction = "linear";
        
    }, 1000); 
}

updateBackgroundVideo();


};

function updateSuggestedLocs(inputValue, data) {

    const {location} = data

    const loc = {
        name: location.name.toLowerCase(),
        country: location.country.toLowerCase(),
        region: location.region.toLowerCase(),
      };

    const suggestedLocs = document.querySelectorAll(".suggested-loc");

    const originalValues = Array.from(suggestedLocs).map(h1 => h1.innerText);
    console.log(originalValues);

    if (inputValue !== loc.name && (inputValue !== loc.country && inputValue !== loc.region)) {
        console.log(`error`);
        return null;
    } else {
        suggestedLocs.forEach((h1, index) => {

            if (index === 0 && inputValue === loc.region) {
                h1.innerText = location.name;
                console.log(loc.name);   
            } else if(index === 0) {
                h1.innerText = loc.name;
                console.log(loc.name);  
            }
             else {
                // index  3 = toronto               2
                h1.innerText = originalValues[index - 1]; // cebu, enewyork, newdelhi, orornot
            }
        });

    }


}

export { displayData, updateSuggestedLocs };