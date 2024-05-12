// TODAY'S DATE

function formatDate(now) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[now.getDay()];
  let date = now.getDate();
  let month = months[now.getMonth()];

  console.log(day);
  console.log(day);
  console.log(month);

  return `${day} ${date}. ${month}`;
}

// GET TIME

function showTime(now) {
  let hours = now.getHours();
  let minutes = now.getMinutes();
  console.log(hours);
  console.log(minutes);

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `Time: ${hours}:${minutes}`;
}

let todaysDate = new Date();
let currentDate = document.querySelector("#current-date");
let currentTime = document.querySelector("#current-time");

currentDate.innerHTML = formatDate(todaysDate);
currentTime.innerHTML = showTime(todaysDate);

// GET TEMPERATURE

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  // console.log(response.data);
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);

  let cityElement = document.querySelector(".current-city");
  let city = response.data.city;
  cityElement.innerHTML = `${city},`;

  let country = response.data.country;
  let countryElement = document.querySelector("#current-country");
  countryElement.innerHTML = country;

  let pressure = response.data.temperature.pressure;
  // console.log(pressure);
  let description = response.data.condition.description;
  let humidity = response.data.temperature.humidity;
  let wind = response.data.wind.speed;

  let descriptionDetails = document.querySelector("#description-details");
  descriptionDetails.innerHTML = description;

  let pressureElement = document.querySelector("#pressure");
  pressureElement.innerHTML = `${pressure}mb`;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${humidity}%`;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${wind}km/h`;
  // Inject an icon
  let iconElement = document.querySelector("#current-temperature-icon");
  let icon = `<img src="${response.data.condition.icon_url}" class="current-temperature-icon"/>`;
  iconElement.innerHTML = `${icon}`;
}

// GET CITY
function searchCity(city) {
  let key = "b30a2d9fef22b5o0t83182be74814ec8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function showCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  searchCity(searchInputElement.value);
}

searchCity("Kharkiv");

let form = document.querySelector("#search-form");
console.log("form");
form.addEventListener("submit", showCity, formatDate, showTime);


// weather forecast


function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];

}
function getForecast(city) {
   let apiKey = "b30a2d9fef22b5o0t83182be74814ec8";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
   axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);

}

//  <div class="row">
//    <div class="col-2">
//      Mon
//      <br />
//      <span class="material-symbols-outlined sunny">partly_cloudy_day</span>
//      <br />
//      <span class="temperature">14°7°</span>
//    </div>
//    <div class="col-2">
//      Tue
//      <br />
//      <span class="material-symbols-outlined rainy"> rainy </span>
//      <br />
//      <span class="temperature">14°2°</span>
//    </div>
//    <div class="col-2">
//      Wed
//      <br />
//      <span class="material-symbols-outlined snowy"> weather_snowy </span>
//      <br />
//      <span class="temperature">4°-1°</span>
//    </div>
//    <div class="col-2">
//      Thu
//      <br />
//      <span class="material-symbols-outlined snowy"> weather_hail </span>
//      <br />
//      <span class="temperature">4°1°</span>
//    </div>
//    <div class="col-2">
//      Fri
//      <br />
//      <span class="material-symbols-outlined snowy"> weather_hail </span>
//      <br />
//      <span class="temperature">6°1°</span>
//    </div>
//    <div class="col-2">
//      Sun
//      <br />
//      <span class="material-symbols-outlined snowy"> weather_hail </span>
//      <br />
//      <span class="temperature">8°3°</span>
//    </div>
//  </div>;