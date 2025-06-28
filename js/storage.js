export function saveToHistory(city) {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  if (!history.includes(city)) {
    history.push(city);
    localStorage.setItem("history", JSON.stringify(history));
  }
}

export function getHistory() {
  return JSON.parse(localStorage.getItem("history")) || [];
}
