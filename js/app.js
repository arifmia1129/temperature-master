// api key
const API_KEY = `eb4a6ccd3ac741458f67a50a3dd2bd24`;

//load temperature when click search button
const loadTemp = () => {
    const inputText = document.getElementById("input-field");
    const city = inputText.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => displayTemp(data));
    inputText.value = "";
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemp = temp => {
    document.getElementById("info").style.display = "block";
    console.log(temp);
    // set innertext by using id
    setInnerText("city-name", temp.name ? temp.name : "Invalid city name");
    setInnerText("temp", temp.main.temp);
    setInnerText("condition", temp.weather[0].main);

    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById("imgIcon");
    imgIcon.setAttribute("src", url);

}