const temperature = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateTime = document.querySelector(".weather2 span");
const imageCond = document.querySelector(".weather3 img");
const condition = document.querySelector(".weather3 span");
const seachCity = document.querySelector(".searchCity");
const form = document.querySelector("form");

let target = "Lucknow";

const fetchData = async () => {

    const url = `https://api.weatherapi.com/v1/current.json?key=dc47989cdbe7402484d164653232205&q=${target}`

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    const {
        current: {temp_c, condition: {
            text, icon
        }},
        location: {name, localTime},
    } = data;

    // in case you don't want to access directly do this 
    // updateDOM(data.current.temp_c, data.location.name);

    // otherwise
    updateDOM(temp_c, name, icon, text, localTime);


}

function updateDOM(temperate, city, emoji, weather, dateAndTime)
{
    temperature.innerText = temperate;
    cityField.innerText = city;
    imageCond.src = emoji
    condition.innerText = weather;
    dateTime.innerText = dateAndTime;

}

fetchData();