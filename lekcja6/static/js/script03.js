
function fetchApi(type) {
  const headers = { "Content-Type": "application/json" } // nagłowek czyli typ danych

  fetch("/api/" + type, { method: "get", headers: headers }) // fetch
    .then(response => response.json())
    .then(
      data => console.log(data) // dane odpowiedzi z serwera
    )

}
document.getElementById('all').onclick = () => fetchApi('all');
document.getElementById('honda').onclick = () => fetchApi('honda');
document.getElementById('first').onclick = () => fetchApi('first');