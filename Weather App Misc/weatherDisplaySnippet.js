switch(json.current_observation.weather) {
    case "Clear":
        $(".weather-block").html(<i class="fa fa-sun-o"></i>);
        break;
    case "Overcast":
    case "Cloudy":
    case "Partly Cloudy":
    case "Mostly Cloudy":
    case "Scattered Clouds":
        $(".weather-block").html(<i class="fa fa-cloud-o"></i>);
        break;
    case "Rain":
    case "Light Rain":
    case "Heavy Rain":
    case "Light Rain Showers":
    case "Heavy Rain Showers":
    case "Rain Showers":
      $(".weather-block").html(<i class="fa fa-umbrella-o"></i>);
      break;
    case "Drizzle":
    case "Light Drizzle":
    case "Heavy Drizzle":
    case "Light Freezing Rain":
    case "Heavy Freezing Rain":
    case "Freezing Rain":
      $(".weather-block").html(<i class="fa fa-tint"></i>);//this looks like a raindrop
      break;
    case "Snow":
    case "Light Snow":
    case "Heavy Snow":
      $(".weather-block").html(<i class="fa fa-asterisk"></i>);
      break;
    case "Thunderstorm":
    case "Light Thunderstorm":
    case "Heavy Thunderstorm":
      $(".weather-block").html(<i class="fa fa-bolt"></i>);
      break;
    default:
        $(".weather-block").html(json.current_observation.weather);//default case is print string
}

//use CSS to style the color of these icons. once they are displayed, their styling should apply
