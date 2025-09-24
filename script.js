const cityInput = document.getElementById('city'); 
const btn = document.getElementById('search-btn'); 
const cityName = document.getElementById('city-name'); 
const temperature = document.getElementById('temperature'); 
const humidity = document.getElementById('humidity'); 
const condition = document.getElementById('weather-condition'); 
const icon = document.getElementById('weather-icon'); 
const error = document.getElementById('error-message');  

btn.addEventListener('click', fetchWeather); 

function fetchWeather() {     
    const city = cityInput.value.trim();
    const apiKey = "0d0eddc9902f1d97ce291c2fddfa75b6";     
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 

    fetch(url)     
    .then(response => response.json())     
    .then(data => {         
        if (data.cod === 404) { 
            error.textContent = 'City not found!'; 
            icon.src = '';
        } else {             
            cityName.textContent = data.name;             
            temperature.textContent = `Temperature:🌡 ${data.main.temp}°C`;             
            humidity.textContent = `Humidity: 💧 ${data.main.humidity}%`;             
            condition.textContent = `Weather Condition:🌍 ${data.weather[0].description}`; 
            icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            error.textContent = '';
        }     
    })     
    .catch(() => {           
        error.textContent = "Error fetching weather data.";
    }); 
}
