import getWeatherIcon from "./getWeatherIcon";

export default (json) => {
  const afterImage = document.querySelectorAll(".afterImage");
  const afterh2 = document.querySelectorAll("h2");
  const afterh3 = document.querySelectorAll("h3");
  Array.from(afterImage).forEach((element, index) => {
    afterh3[index].textContent = `${json.city.name} \r\n
        습도 : ${json.list[index + 3].main.humidity} \r\n
        최대 온도 : ${json.list[index + 3].main.temp_max} \r\n
        최소 온도 : ${json.list[index + 3].main.temp_min}`;
    getWeatherIcon(
      json,
      afterImage[index],
      afterh2[index],
      json.list[index + 3].dt_txt.slice(11, 13),
    );
  });
};
