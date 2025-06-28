export function showWeather(city, weather) {
  const icon = getWeatherIcon(weather.weathercode);
  document.getElementById("weatherResult").innerHTML = `
    <h2 class="text-xl font-semibold">${city}</h2>
    <p>${icon} Temp: ${weather.temperature}°C</p>
    <p>Wind: ${weather.windspeed} km/h</p>
  `;
}

function getWeatherIcon(code) {
  if (code === 0) return "☀️";
  if (code < 50) return "🌥️";
  if (code < 80) return "🌧️";
  return "⛈️";
}

export function renderHistory(history) {
  const el = document.getElementById("searchHistory");
  el.innerHTML = `<h3 class="font-bold mb-2">Search History:</h3>
    <ul class="list-disc pl-5 space-y-1">
      ${history.map(h => `<li>${h}</li>`).join("")}
    </ul>`;
}

export function showError(msg) {
  alert(`❌ ${msg}`);
}

export function setLoading(show) {
  document.getElementById("loader").classList.toggle("hidden", !show);
}
