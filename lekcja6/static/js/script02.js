
function fetchPost() {

  const body = JSON.stringify({ a: 1, b: 2, c: "fetch" }) // body czyli przesyłane na serwer dane

  const headers = { "Content-Type": "application/json" } // nagłowek czyli typ danych

  fetch("/api", { method: "post", body: body, headers: headers }) // fetch
    .then(response => response.json())
    .then(
      data => console.log(data) // dane odpowiedzi z serwera
    )

}
document.getElementById('btn').onclick = () => fetchPost();