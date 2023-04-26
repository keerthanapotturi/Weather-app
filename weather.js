// Get user's location
navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  
  // Fetch weather data using OpenWeatherMap API
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=1498c50e8b0adc6afab9936094c24c81`)
    .then(response => response.json())
    .then(data => {
      const city = data.name;
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;
      
      // Display location and weather data to user
      document.getElementById("location").innerHTML = `Current weather in ${city}:`;
      document.getElementById("weather").innerHTML = `${temperature}°F and ${weatherDescription}`;

      // Map weather conditions to corresponding emojis
const weatherEmojis = {
    "clear": "☀️",
    "clouds": "☁️",
    "drizzle": "🌧️",
    "rain": "🌧️",
    "thunderstorm": "⛈️",
    "snow": "❄️",
    "mist": "🌫️",
    "smoke": "🌫️",
    "haze": "🌫️",
    "dust": "🌫️",
    "fog": "🌫️",
    "sand": "🌫️",
    "ash": "🌫️",
    "squall": "🌬️",
    "tornado": "🌪️",
  }
  
  // Get the emoji corresponding to the weather condition
  const weatherEmoji = weatherEmojis[weatherDescription];
  
  // Display the weather with the emoji
  document.getElementById("weather-icon").innerHTML = `${weatherEmoji}`;
  
  

    })
    .catch(error => console.error(error));
}

function error() {
  console.error("Unable to retrieve location.");
}
// Map weather conditions to corresponding icons



  
