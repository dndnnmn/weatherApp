const handleData = (data) => {

    const date = new Date(data.location.localtime);
    const dayNum = date.getDate();
    const daysinWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
    console.log(date);
    console.log(dayNum);

    const days = daysinWeek[date.getDay()];
    const month = date.toLocaleString('default', { month: 'long' });
    const times = data.location.localtime.substr(11);
    const newTime = `${times.slice(0, 2)} : ${times.slice(3, 5)}`;
      
    
    
    function checkDay(day) {
     let isDay = "day";

        if (day === 0) {
            isDay = "night";
        }
        
    }

    return {days,month, dayNum, newTime}
};


export { handleData };