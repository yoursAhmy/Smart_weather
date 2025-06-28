import { getCoordinates, getWeather } from "./api.js";
import { saveToHistory, getHistory } from "./storage.js";
import { showWeather, renderHistory, showError, setLoading } from "./dom.js";

const searchBtn = document.getElementById("searchBtn");
const toggleTheme = document.getElementById("toggleTheme");

searchBtn.addEventListener("click", async () => {
  const input = document.getElementById("cityInput");
  const city = input.value.trim();
  if (!city) return;

  setLoading(true);
  try {
    const coords = await getCoordinates(city);
    const weather = await getWeather(coords.lat, coords.lon);
    showWeather(coords.name, weather);
    saveToHistory(coords.name);
    renderHistory(getHistory());
  } catch (err) {
    showError(err.message);
  } finally {
    setLoading(false);
  }
});

toggleTheme.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
});

function updateClock() {
  document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);

// Load theme + history on start
(function init() {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }
  renderHistory(getHistory());
  updateClock();
})();
