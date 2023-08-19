const where = document.querySelector("#information span:nth-child(1)");
const weather = document.querySelector("#information span:nth-child(2)");
const tem = document.querySelector("#information span:nth-child(3)");
const feelsLike = document.querySelector("#information span:nth-child(4)");

const API_KEY = "7150a27bebdedaa59f8eb68738cba52a";

function APIGood(p){
    const lat = p.coords.latitude;
    const lon = p.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        where.innerText = data.name;
        weather.innerText = data.weather[0].main;
        tem.innerText = `tem:${data.main.temp}`;
        feelsLike.innerText = `feel-tem:${data.main.feels_like}`;
    })
}


function APINone(){
    alert("error");
}

navigator.geolocation.getCurrentPosition(APIGood, APINone);