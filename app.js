var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");



var serverURL = "https://api.funtranslations.com/translate/klingon.json"


function getTranslationURL(input) {
    return serverURL + "?text=" + input
}

function errorHandler(error) {
    console.log("Opps occured", error);
    alert("Something wrong with server! Try again after some time")
}


function clickHandler() {
    var inputText = txtInput.value;

    if (inputText === "") {
        outputDiv.innerText = "Please enter your desired text on above text field"
    } else {
        outputDiv.innerText = ""
        fetch(getTranslationURL(inputText))
            .then(response => response.json())
            .then(json => {
                var translatedText = json.contents.translated;
                outputDiv.innerText = translatedText; // output
            })
            .catch(errorHandler)
    }
};

btnTranslate.addEventListener("click", clickHandler)