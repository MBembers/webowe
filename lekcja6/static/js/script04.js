function compare() {
  fetch("/compare", { method: "post", body: document.getElementById('input-text').value },
    { mode: 'cors' })
    .then(response => response.blob())
    .then(blob => {
      console.log(blob);

      const reader = new FileReader();

      reader.addEventListener("load", function () {
        console.log(reader.result) // to jest plik obrazka w postaci stringa  base64           
        document.getElementById("img").src = reader.result; // wyświetlenie image
      }, false);

      reader.readAsDataURL(blob); // tutaj reader zaczyna czytać plik, powyższy event load to koniec tego czytania

      //
    });
}
document.getElementById("c")
