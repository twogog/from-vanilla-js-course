const weather = new Weather();
const ui = new UI();
const stor = new Storage();

const weath = function() {
  
  weather.getWeather().then(data => {
    const date = `${new Date(data.sys.sunset * 1000 + (data.timezone * 1000)).getUTCHours()}:${new Date(data.sys.sunset * 1000).getMinutes()}`;
    ui.location.textContent = data.name;
    ui.descr.textContent = data.weather[0].description;
    ui.temp.textContent = `${Math.round(data.main.temp)} C`;
    ui.icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    ui.humid.textContent = `Относительная влажность: ${data.main.humidity} %`;
    ui.feel.textContent = `Ощущается как: ${Math.round(data.main.feels_like)} C`;
    ui.wind.textContent = `Скорость ветра: ${data.wind.speed} м/с`;
    ui.sunset.textContent = `Закат в: ${date}`;
  }).catch();
  
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  e.preventDefault();

  weather.getLocation(ui.locationValue.value);
  weath();

  if (ui.locationValue.value !== '') {
    stor.setStor(ui.locationValue.value);
  }
  
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('citys') === null) {
    weather.getLocation();
  } else {
    weather.getLocation(stor.getStor());
  }
  
  weath();

});