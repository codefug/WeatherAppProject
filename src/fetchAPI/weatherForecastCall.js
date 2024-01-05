import colorChange from "../content/colorChange";
import absoluteDescription from "./absoluteDescription";
import getAfterWeatherIcon from "./getAfterWeatherIcon";
import getWeatherIcon from "./getWeatherIcon";
import callGiphy from "./giphyCall";
import setDescription from "./setDescriptionSection";

export default async function forecastWeather(q) {
  let json;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=2bc84a93a8c9b3dc7068adb352482bba&units=metric`,
      { mode: "cors" },
    );
    json = await response.json();
    console.log(json);
    const img = document.querySelector(".headLogo");
    const h1 = document.querySelector("h1");
    const todayWeather = document.querySelector(".todayWeather");
    todayWeather.textContent = `오늘 ${json.city.name}의 날씨`;
    setDescription(json);
    if (
      Number(json.list[2].dt_txt.slice(11, 13)) >= 6 &&
      Number(json.list[2].dt_txt.slice(11, 13)) <= 20
    ) {
      colorChange(false);
    } else {
      colorChange(true);
    }
    await getWeatherIcon(json, img, h1, json.list[0].weather[0].main);
    await getAfterWeatherIcon(json);
    await absoluteDescription(json.list[0].weather[0].description);
    await callGiphy(json.list[0].weather[0].description);
  } catch (err) {
    const notification = document.querySelector(".notification");
    const dialog = document.querySelector("dialog");
    notification.textContent = `잘못된 장소입니다! 도시 이름만 입력해주셔야 해요..`;
    dialog.showModal();
  }
}
