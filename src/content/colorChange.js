import morning from "../asset/background/morning.jpg";
import night from "../asset/background/night.jpg";

export default (flag) => {
  const html = document.querySelector("html");
  const clickButton = document.querySelector(".clickButton");
  if (flag) {
    html.style.color = "#FFFFFF";
    html.style.backgroundImage = `url(${night})`;
    clickButton.setAttribute("style", "background-color:black");
    clickButton.style.color = "#FFFFFF";
  } else {
    html.style.color = "#000000";
    html.style.backgroundImage = `url(${morning})`;
    clickButton.setAttribute("style", "background-color:white");
    clickButton.style.color = "#000000";
  }
};
