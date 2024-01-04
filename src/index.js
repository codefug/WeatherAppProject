import loading from "./content/loading";
import connectWithImageAndButton from "./fetchAPI/connectWithImageAndButton";
import forecastWeather from "./fetchAPI/weatherForecastCall";
import "./style.css";


(async function start() {
  await forecastWeather("Korea");
  await connectWithImageAndButton();
  loading();
})();