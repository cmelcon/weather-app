$.ajax({
  url: "http://ipinfo.io/json",
  success: function(resp, txt, xhr){
    console.log(resp);
    $("#location").html(resp.city+", "+resp.region+", "+resp.country);
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?zip=" + resp.postal + ",us&appid=9a4d22ebfb7f1ae60d324146b57da783",
      success: function(resp, txt, xhr){
        console.log(resp);
        var c = resp.main.temp;
        c = Math.round(Number(c)) - 273;
        $("#temperature").html(c + " degrees C");


      }
    })
  }
})
