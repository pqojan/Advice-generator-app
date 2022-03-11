const api = 'https://api.adviceslip.com/advice';
let text = document.getElementById('text');
let advice = document.getElementById('advice');
const button = document.getElementById('circle');

text.innerHTML = 'Please Start...'

button.onclick = async () => {
    const response = await fetch(api);
    const myJson = await response.json(); 
    text.innerHTML =  '"'+myJson.slip.advice+'"';
    advice.innerHTML = "ADVICE #"+myJson.slip.id;
    console.log(myJson);
  }

