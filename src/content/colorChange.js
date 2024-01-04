import morning from "../asset/background/morning.jpg";
import night from "../asset/background/night.jpg";

export default (flag) => {
  const html = document.querySelector("body");
  const clickButton = document.querySelector(".clickButton");
  if (flag) {
    html.style.color = "#FFFFFF";
    html.style.backgroundImage = night;
    console.log("night");
  } else {
    html.style.color = "#000000";
    html.style.backgroundImage = morning;
    clickButton.setAttribute("style", "background-color:black");
    clickButton.style.color = "#FFFFFF";
  }
};
