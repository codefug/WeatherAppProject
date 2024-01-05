export default function setDescription(json) {
  const humidity = document.querySelector(".humidity");
  const max = document.querySelector(".max");
  const min = document.querySelector(".min");

  humidity.textContent = `습도 : ${json.list[0].main.humidity}`;
  max.textContent = `최대 온도 : ${json.list[0].main.temp_max}`;
  min.textContent = `최소 온도 : ${json.list[0].main.temp_min}`;
}
