/**
 * json을 받아서 그림을 포함한 설명을 주는 함수
 * @param {*} json
 * @param {*} img
 * @param {*} description
 * @param {*} context
 */
export default async function getWeatherIcon(json, img, context, h1text) {
  img.src = `https://openweathermap.org/img/wn/${json.list[0].weather[0].icon}@2x.png`;
  context.textContent = `${h1text}`;
}
