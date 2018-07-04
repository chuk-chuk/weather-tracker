
# Weather Tracker 🌧 || 🌤

An application that displays five days weather data for the chosen location as well as pointing to the same location on the Google Map. The application uses visualisation chart from react-chars.js and google API to render map.
As a user you can search a city in the search bar field or alternatively drag the map and pick a city from any location by passing coordinates with a request url to OpenWeatherApi(tbc).

To create a development build of the app and run it inside of a Docker container please follow as below:

## How to get started with Docker
- `git clone`
- create `.env` in the root directory and add the file to `.gitignore`
- add `REACT_APP_WEATHER_API_KEY=YOUR_KEY` to the `.env`
- add `REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_KEY` to the `.env`
- `docker-compose up`
- head to localhost:4000

## How to get started with NPM
- `git clone`
- create `.env` in the root directory and add the file to `.gitignore`
- add `REACT_APP_WEATHER_API_KEY=YOUR_KEY` to the `.env`
- add `REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_KEY` to the `.env`
- `npm install`
- `npm test`
- `npm start`
- head to localhost:3000
