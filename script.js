var cityname;  // Declare cityname globally
const apiKey = "2154f0626c00accad0e19be2ce335f24";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

function cityget() {
    cityname = document.getElementById('city').value;
    findWeather();
}

async function findWeather() {
    let data = await fetch(`${apiUrl}&q=${cityname}&appid=${apiKey}`);
    let resp = await data.json();
    console.log(resp);

    // Update the UI with the fetched data
    document.querySelector('.temp').innerText = `${Math.round(resp.main.temp)}°C`;
    document.querySelector('.city').innerText = resp.name;
    document.querySelector('.humidity').innerText = `${resp.main.humidity}%`;
    document.querySelector('.wind').innerText = `${resp.wind.speed} km/h`;
}