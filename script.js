const handleCurrTime = () => {
    const timeElement = document.getElementById('current-time');
    
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    timeElement.textContent = `${hours}:${minutes}`;
};


const handleCurrDate = () => {
    const dateElement = document.getElementById('current-date');
    const now = new Date();
    const month = now.toLocaleString('default', { month: 'short' });
    const day = now.getDate();

    dateElement.textContent = `${month} ${day}`;
};

const handleCurrWeather = () => {
    const tempElement = document.getElementById('current-temperature')
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=45.8144&longitude=15.978&current_weather=true`;
    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = Math.round(data.current_weather.temperature);
            tempElement.textContent = `${temperature}°C`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
};

handleCurrTime();
handleCurrDate();
handleCurrWeather();
