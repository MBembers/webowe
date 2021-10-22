console.log("Started")

document.getElementById("range1").addEventListener("input", function () {
  $.ajax({
    url: "/post",
    contentType: 'application/json',
    data: JSON.stringify({
      range1: document.getElementById("range1").value
    }),
    type: "POST",
    success: function (data) {
      console.log(data)
      document.getElementById("range2").value = data.range2
    },
    error: function (xhr, status, error) {
      console.log('Error: ' + error.message);
    },
  });
})