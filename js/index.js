// Input value to insert number
const inputValue = document.getElementById("input-value");
// Button that will convert numbers 
const convertBtn = document.getElementById("convert-btn");

const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result");

const metersToFeet = 3.281;
const litresToGallon = 0.264;
const kiloToPound = 2.204;

// Function meters to feet 
convertBtn.addEventListener("click", (e) => {
        e.preventDefault();
    metersFeet();
    litresGallon();
    kilosPounds();
});

function metersFeet() {
     let baseValue = inputValue.value 
    // const finalResult = 
    lengthResult.textContent = `${baseValue} meters = ${baseValue * metersToFeet} feet`;
}

function litresGallon() {
    let baseValue = inputValue.value 
    volumeResult.textContent = `${baseValue} litres = ${baseValue * litresToGallon} gallons`
}

function kilosPounds() {
    let baseValue = inputValue.value 
    massResult.textContent = `${baseValue} kilograms = ${baseValue * kiloToPound} pounds`
}