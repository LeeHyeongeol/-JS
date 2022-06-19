const API_KEY = "c4b6a35118bd972bbb612884ed3f6a54"
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

function onGeoOk(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  console.log(`You live in ${lat} and ${lon}`)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  console.log(url)
  fetch(url)
    .then((element) =>
      // return이 있지 않는 한 {}로 감싸지 않는다.
      element.json()
    ).then((data) => {
      const weather = document.querySelector("#weather span:first-child")
      const city = document.querySelector("#weather span:last-child")
      weather.innerText = data.weather[0].main
      city.innerText = data.name
    })
}

function onGeoError() {
  alert("Can't find you. No weather for you")
}