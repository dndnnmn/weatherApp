const apiKey = "3ed3b2f2bb3941729a2120358241311";

const fetchWeatherData = async (city) => {

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Could not fetch Data");

        } else {
            const data = await response.json();
            console.log(data);
            console.log(data.location.localtime);
            return data;
        }
        if (data.error) {
            return null;
        }

    } catch (error) {
        console.error(error);
        return null;
    }
};


export { fetchWeatherData };