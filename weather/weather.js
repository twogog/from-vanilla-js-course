class Weather {
  constructor() {
    this.id = '9636c975de63758d23c3678365d5c0b9';
    this.city;
  }

  async getWeather() {

    const response = await fetch((`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&lang=ru&APPID=${this.id}`));

    const data = response.json();

    return data;
  }

  getLocation(city = 'Omsk') {
    this.city = city;
  }
}


