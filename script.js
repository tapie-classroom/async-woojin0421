async function getWeather(){ 
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.53&lon=126.98&appid=386eff3418a1324e8315926a8e82496b&units=metric') 
    .then((res) => res.json()) 
    .then((data) => { 
        console.log(data); 
        document.getElementById("tem").innerHTML = data.main.temp + '°C';
        document.getElementById("seum").innerHTML = data.main.humidity-16 + '%';
        document.getElementById("nal").innerHTML = data.weather[0].main;
        document.getElementById("wind").innerHTML = data.wind.speed+ 'm/s';
        
    });
        
        
}
function reload(){
    window.location.href = "index.html";
}
getWeather();