console.log("Started")
var counter = 0;
document.getElementById("left-panel").addEventListener("mousemove", function (event) {
  // console.log(event)
  var start_time = Date.now()
  red = document.createElement("div")
  red.id = counter
  red.className = "red-circle"
  red.style.left = event.clientX - 20 + "px"
  red.style.top = event.clientY - 20 + "px"
  red.innerHTML = event.clientX + "</br>" + event.clientY
  document.body.appendChild(red)

  reder = document.getElementById(counter - 1)
  console.log(reder)
  if (reder)
    reder.remove()
  $.ajax({
    url: "/post",
    contentType: 'application/json',
    data: JSON.stringify({
      posx: event.clientX,
      posy: event.clientY
    }),
    type: "POST",
    success: function (data) {
      let end_time = Date.now()
      const time = end_time - start_time;
      console.log(data)
      black = document.createElement("div")
      black.id = counter
      black.className = "black-circle"
      black.style.left = data.posx - 20 + "px"
      black.style.top = data.posy - 20 + "px"
      black.innerText = time
      document.body.appendChild(black)

      dark = document.getElementById(counter - 1)
      console.log(dark)
      if (dark)
        dark.remove()
      counter++
    },
    error: function (xhr, status, error) {
      console.log('Error: ' + error.message);
    },
  });
})