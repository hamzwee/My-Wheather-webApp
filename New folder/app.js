const apiKey = '73af66ff377d4baee01d7eeb5465878c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

document.getElementById('weather-form').addEventListener('submit', getWeather);

function getWeather(e) {
    e.preventDefault();
    
    const city = document.getElementById('city-input').value;
    const url = `${apiUrl}${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => {
            alert(error.message);
        });
}

function displayWeather(data) {
    document.getElementById('city-name').innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;

    document.getElementById('weather-result').style.display = 'block';
}
