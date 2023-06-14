function convertTemperature() {
    var inputTemperature = document.getElementById('input').value;
    var fromDegree = document.getElementById('from').value;
    var toDegree = document.getElementById('to').value;

    var convertedTemperature;
    var resunit;
    if (fromDegree == 'celsius' && toDegree == 'fahrenheit') {
        convertedTemperature = (inputTemperature * 9 / 5) + 32;
        resunit='°F'
    } 
    else if (fromDegree == 'celsius' && toDegree == 'kelvin') {
        convertedTemperature = parseFloat(inputTemperature) + 273.15;
        resunit='°K'
    } 
    else if (fromDegree == 'fahrenheit' && toDegree == 'celsius') {
        convertedTemperature = (inputTemperature - 32) * 5 / 9;
        resunit='°C'
    } 
    else if (fromDegree == 'fahrenheit' && toDegree == 'kelvin') {
        convertedTemperature = (inputTemperature - 32) * 5 / 9 + 273.15;
        resunit='°K'
    } 
    else if (fromDegree == 'kelvin' && toDegree == 'celsius') {
        convertedTemperature = inputTemperature - 273.15;
        resunit='°C'
    } 
    else if (fromDegree == 'kelvin' && toDegree == 'fahrenheit') {
        convertedTemperature = (inputTemperature - 273.15) * 9 / 5 + 32;
        resunit='°F'
    } 
    if(fromDegree == toDegree)
    {
        convertedTemperature = inputTemperature;
    }
    var resultSection = document.querySelector(".result");
    var resultText = document.getElementById('resultText');
    resultText.textContent = 'Converted Temperature: ' + convertedTemperature.toFixed(2) + resunit;
    resultSection.style.display = "block";
}
var convertButton = document.getElementById('convertButton');
convertButton.addEventListener('click', convertTemperature);
