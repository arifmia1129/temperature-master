const API_KEY = `eb4a6ccd3ac741458f67a50a3dd2bd24`;
const loadTem = () => {
    const inputText = document.getElementById("input-field");
    const city = inputText.value;
    console.log(city);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => displayTem(data));
}

const displayTem = tem => {
    console.log(tem);
}