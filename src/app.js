function displayTemp(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = response.data.condition.icon;
}
let apiKey = "b2aa1fad6a010fof20ab443f842te386";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={Paris}}&key=${apiKey}`;
axios.get(apiUrl).then(displayTemp);
