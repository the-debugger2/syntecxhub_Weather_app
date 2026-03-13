let weather = {
    apikey: "ade132a46dc4f8a8a47b237373dc09b4",
    fetchWeather: function(city) {
        fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector("#city").innerText = "Weather in " + name;
        document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector("#description").innerText = description;
        document.querySelector("#temperature").innerText = temp + "°C";
        document.querySelector("#humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector("#wind").innerText = "Wind Speed: " + speed + " km/h";

    }
};

document.addEventListener("DOMContentLoaded", function() {
    // Fetch Lusaka weather on page load
    weather.fetchWeather("Lusaka");

    document.getElementById("search-btn").addEventListener("click", function() {
        const city = document.getElementById("city-input").value.trim();
        if (city) weather.fetchWeather(city);
    });

    document.getElementById("city-input").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            const city = this.value.trim();
            if (city) weather.fetchWeather(city);
        }
    });
});