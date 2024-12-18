let form = document.querySelector('form')
let input =document.querySelector('input')
let card = document.querySelector('#weathercard')
let h1 =document.querySelector ('h1')
let h2 =document.querySelector ('h2')
let img =document.querySelector ('img')
let p =document.querySelector ('p')




const fetchweather = async (e) => {
    e.preventDefault ()

//    card.className = "  p-3 shadow-xl my-4"


try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key= ff489fc703654ca9ac382130241712&q=${input.value}&aqi=yes`);

    const data =  await response.json();
    h1.innerText =data.current.temp_c;
    h2.innerText =data.location.name;
    img.setAttribute("src", data.current.condition.icon);
    p.innerText = data.current.condition.text;

 
    
    card.style= " card p-3 shadow-xl my-4"
    console.log(data);

} catch (error) {
    // window.alert('please enter valid city name ')
}
form.reset();
};


form.addEventListener("submit",fetchweather);

