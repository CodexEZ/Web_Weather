

    const click = document.getElementById('button');
    click.addEventListener('click',async function(){
        console.log("Hello")
        var cityName = document.getElementById('input').value;
        const url = `https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=${cityName}`;
        const fetchData =  await fetch(url);
        const data = await fetchData.json();
        console.log(data);
        document.getElementById("city").innerHTML = data.location.name;
        document.getElementById("temp").innerHTML = data.current.temp_c + " C";
        document.getElementById("humidity").innerHTML = data.current.humidity;
    })