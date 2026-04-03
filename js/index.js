// Input value to insert number
const inputValue = document.getElementById("input-value");
// Button that will convert numbers 
const convertBtn = document.getElementById("convert-btn");

const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");
const massRsult = document.getElementById("mass-result");

const metersToFeet = 3.281;
const litresToGallon = 0.264;
const kiloToPound = 2.204;

// Function meters to feet 
convertBtn.addEventListener("click", (e) => {
        e.preventDefault();
    let baseValue = inputValue.value 

    lengthResult.textContent = `${baseValue} meters = ${baseValue * metersToFeet} feet`;
});