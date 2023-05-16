const btn = document.getElementById('btn');
addEventListener('keypress', function (e) {
    if(e.key == 'Enter') {
        btn.click();
    }
})

async function getWeather() {
    const city = document.getElementById('city').value;
    const result = document.getElementById('resultado');

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d624370497d30ca21d54943f48656592&units=metric&lang=pt_br`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.textContent = `Temperatura atual em ${data.name}: ${Math.round(data.main.temp)}ºC`;
    }).catch((error) => result.textContent = 'Cidade não encontrada')
}
