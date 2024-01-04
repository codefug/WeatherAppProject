import connectWithImageAndButton from "./fetchAPI/connectWithImageAndButton";
import forecastWeather from "./fetchAPI/weatherForecastCall";
import "./style.css";


(function start() {
  forecastWeather("Korea");
  connectWithImageAndButton();
})();