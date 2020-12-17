const inputText = document.querySelector('#input-text')
const outputText = document.querySelector('#output-text')
const btnTranslate = document.querySelector('button')

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTraslationURL(text){
    return serverURL + "?text=" + text;
}

function errorHandler(err){
    console.log(err);
    alert("Server issue ..cannot  translate right now 😞");
}

function clickHandler(){
    var textInput = inputText.value
    var url = getTraslationURL(textInput);
    
    fetch(url)
    .then(response => response.json())
    .then(json => showTranslation(json))
    .catch(errorHandler)
}

function showTranslation(json){
    var translatedText = json.contents.translated;
    outputText.innerText = translatedText;
}

btnTranslate.addEventListener('click', clickHandler)
