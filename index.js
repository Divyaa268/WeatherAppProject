const temperature = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateTime = document.querySelector(".weather2 span");
const imageCond = document.querySelector(".weather3 img");
const condition = document.querySelector(".weather3 span");
const seachCity = document.querySelector(".searchCity");
const form = document.querySelector("form");

// Setting a default location
let target = "Lucknow";

form.addEventListener("submit", search);

// Function used to fetch data from the Weather API online
const fetchData = async (target) => {

    try
    {
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
    catch(errorMessage)
    {
        alert("Location not found! Try again")
    }
};

function updateDOM(temperate, city, emoji, weather, dateAndTime)
{
    temperature.innerText = temperate;
    cityField.innerText = city;
    imageCond.src = emoji
    condition.innerText = weather;

    const exactDate = dateAndTime.split(" ")[0];
    const exactTime = dateAndTime.split(" ")[1];

    const exactDay = new Date(exactDate).getDay();

    dateTime.innerText = `${exactTime} - ${getDayFullNmae(exactDay)}   ${exactDate}`;

}

fetchData();

// Function to get the name of day
function getDayFullName(num) {
    switch (num) {
      case 0:
        return "Sunday";
  
      case 1:
        return "Monday";
  
      case 2:
        return "Tuesday";
  
      case 3:
        return "Wednesday";
  
      case 4:
        return "Thursday";
  
      case 5:
        return "Friday";
  
      case 6:
        return "Saturdat";
  
      default:
        return "Don't Know";
    }
}