
//Remapiamento dos elementos //
const convertButton = document.querySelector(".convert-botao")
const currencySelect = document.querySelector(".currency-select")
const TrocarLogo = document.querySelector(".logo-moedas")


//função ara
function convertValues() {
    const inputDoValorValue = document.querySelector(".input-DoValor").value
    const valorDaConversaoR = document.querySelector(".Valor-Real")
    const valorDaConversaoU = document.querySelector(".Valor-usa")


    console.log(currencySelect.value)
    const dolarToday = 5.49
    const euroToday = 5.38
    const convertDoVlue = inputDoValorValue / dolarToday

    if (currencySelect.value == "Dolar") {

        valorDaConversaoU.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(convertDoVlue / dolarToday)
    }


    if (currencySelect.value == "Euro") {

        valorDaConversaoU.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertDoVlue / euroToday)


    }


    valorDaConversaoR.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputDoValorValue)



}

function MudarCurrencyName() {
    //Mudar o Nome da moeda
}


currencySelect.addEventListener("change", function(MudarCurrencyName){
const currencyName = document.getElementById("currency-name")
const currencyImage = document.getElementById("logo-moeda-usa")

if(currencySelect.value == "Euro") {
    currencyImage.innerHTML = "Euro"
}

if(currencySelect.value == "Euro") {
    currencyName.innerHTML == "Dolar"
    currencyImage.src = "./assest/usa.png"
}

if(currencySelect.value == "Euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assest/euro.png"
}

if(currencySelect.value == "Dolar") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assest/usa.png"
}

convertValues()

});
    
convertButton.addEventListener("click", convertValues);
