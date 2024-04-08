 async function fetchdata(){
     let cityname = document.getElementById('cityname').value
     let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=4fce8056fdf66519f0fc40a3f1af5aac&units=metric`)
     let jsondata =  await data.json()
     
     document.getElementById('tem').value = jsondata.main.temp;
     document.getElementById('hum').value = jsondata.main.humidity;
     document.getElementById('win').value = jsondata.wind.speed;
     
}
