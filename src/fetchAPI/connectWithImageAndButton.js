import forecastWeather from "./weatherForecastCall";

export default ()=>{
    const click = document.querySelector('.clickButton');
    click.addEventListener('click',(event)=>{
        event.preventDefault();
        const inputMessage = document.querySelector('#inputMessage');
        const v = inputMessage.value;
        inputMessage.value='';
        forecastWeather(v);
    })
}