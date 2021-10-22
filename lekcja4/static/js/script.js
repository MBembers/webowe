console.log("Started")

document.getElementById("btn-div").addEventListener("click", function () {
  $.ajax({
    url: "/post",
    contentType: 'application/json',
    data: JSON.stringify({
      num1: document.getElementById("num1").value,
      num2: document.getElementById("num2").value
    }),
    type: "POST",
    success: function (data) {
      console.log(data)
      var obj = data
      window.alert("suma: " + obj.sum +
        " iloczyn: " + obj.multipli)
    },
    error: function (xhr, status, error) {
      console.log('Error: ' + error.message);
    },
  });
})