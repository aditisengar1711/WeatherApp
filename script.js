// script.js
const apiKey = '499b68b7f701e70c738a1e46b3f4f7d6';

document.getElementById('search-button').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            
            weatherInfo.innerHTML = `
                <h2>${cityName}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Weather: ${description}</p>
            `;
        })
     
}
