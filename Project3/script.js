const ApiKey= "cc800d446806660b86b0f8e919db63bd";
const ApiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weatherIcon");


    async function checkWeather(city){ 
            const response= await fetch(ApiUrl+city+ `&appid=${ApiKey}`);

            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";

            }else{
                const data= await response.json();

            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°c";
            document.querySelector(".humidity").innerHTML=data.main.humidity;
            document.querySelector(".wind").innerHTML=data.wind.speed+ "km/h";


            if(data.weather[0].main=="Clouds"){
                weatherIcon.src="./images/cloudy.svg";
            }
            else if(data.weather[0].main=="Clear"){
                weatherIcon.src="./images/clear-day.svg";
            }
            else if(data.weather[0].main=="Rain"){
                weatherIcon.src="./images/rain.svg";
            }
            else if(data.weather[0].main=="Drizzle"){
                weatherIcon.src="./images/drizzle.svg";
            }
            else if(data.weather[0].main=="Mist"){
                weatherIcon.src="./images/mist.svg";
            }
            else if(data.weather[0].main=="Snow"){
                weatherIcon.src="./images/snow.svg";
            }
            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";
            }
            

        }

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
