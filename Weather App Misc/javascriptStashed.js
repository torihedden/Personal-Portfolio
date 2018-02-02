var cityName = "Atlanta"
var stateName = "GA"

$.getJSON("http://api.wunderground.com/api/b80f8aa82340bfd9/conditions/q/" + stateName + "/" + cityName + ".json", function(json) {
  $(".weather-block").html(json.current_observation.weather);
});

<i class="fa fa-sun-o"></i>
<i class="fa fa-cloud"></i>
<i class="fa fa-umbrella"></i>
