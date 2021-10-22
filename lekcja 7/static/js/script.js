async function myFetch(url, body) {
  await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(body),
  });
}
async function addUser() {
  let body = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  const response = await myFetch("/addUser", body);
  const data = await response.json();
}
