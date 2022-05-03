const weather = {
    "apiKey": "eb9b03aa710c233dec94911d50e8c060",

    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&appid=" +
                this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
        const {
            name
        } = data;
        const {
            icon,
            description
        } = data.weather[0];
        const {
            temp,
            humidity
        } = data.main;
        const {
            speed
        } = data.wind;
       
        document.querySelector('.city').innerText = "Météo à " + name;
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = "Température : " + temp + " °C";
        document.querySelector('.humidity').innerText = "Humidité dans l'air : " + humidity + " %";
        document.querySelector('.wind').innerText = "Vitesse du vent : " + speed + " km/h";
        document.querySelector('.weather').classList.remove('loading');

    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector('.search button').addEventListener('click', function () {
    weather.search();
});

document.querySelector('.search-bar').addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Annecy");