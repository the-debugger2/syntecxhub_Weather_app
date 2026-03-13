# Weather App

A simple web-based weather application that allows users to check the current weather conditions for any city.

## Live demonstration

https://the-debugger2.github.io/syntecxhub_Weather_app/

## Description

This Weather App fetches real-time weather data from the OpenWeatherMap API and displays it in a clean, user-friendly interface. Users can search for weather information by entering a city name.

## Features

- Search weather by city name
- Display current temperature, weather description, humidity, and wind speed
- Default weather display for Lusaka on load
- Responsive design with a dark theme
- Weather icons from OpenWeatherMap

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- OpenWeatherMap API

## How to Use

1. Clone or download the repository.
2. Open `index.html` in a web browser.
3. Enter a city name in the search bar and click the search button or press Enter.
4. View the weather information displayed on the card.

## API Key

This app uses the OpenWeatherMap API. The API key is currently hardcoded in `script.js` for demonstration purposes. For production use, obtain your own API key from [OpenWeatherMap](https://openweathermap.org/api) and replace the `apikey` value in the `weather` object.

**Security Note:** Never expose API keys in client-side code. Consider moving API calls to a backend server.

## Project Structure

- `index.html`: Main HTML file
- `styles.css`: CSS styles for the app
- `script.js`: JavaScript logic for fetching and displaying weather data

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Background image sourced from external URL