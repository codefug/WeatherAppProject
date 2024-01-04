// 2bc84a93a8c9b3dc7068adb352482bba
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key} geocoding
// https://openweathermap.org/forecast16 weather

import colorChange from "../content/colorChange";
import absoluteDescription from "./absoluteDescription";
import getAfterWeatherIcon from "./getAfterWeatherIcon";
import getWeatherIcon from "./getWeatherIcon";
import callGiphy from "./giphyCall";

export default async function forecastWeather(q) {
  let json;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=2bc84a93a8c9b3dc7068adb352482bba&units=metric`,
      { mode: "cors" },
    );
    json = await response.json();
    const img = document.querySelector('.headLogo');
    const h1 = document.querySelector('h1');
    const todayWeather = document.querySelector('.todayWeather');
    todayWeather.textContent=`오늘 ${json.city.name}의 날씨`;
    if (
      Number(json.list[0].dt_txt.slice(11, 13))>=6 &&
      Number(json.list[0].dt_txt.slice(11, 13))<=20
    ){
      colorChange(true)
    }else{
      colorChange(false)
    }
      getWeatherIcon(json, img, h1, json.list[0].weather[0].main);
    getAfterWeatherIcon(json);
    absoluteDescription(json.list[0].weather[0].description);
    callGiphy(json.list[0].weather[0].description);
  } catch (err) {
    const notification = document.querySelector(".notification");
    const dialog = document.querySelector("dialog");
    notification.textContent = `잘못된 장소입니다! 도시 이름만 입력해주셔야 해요..`;
    dialog.showModal();
  }
}
