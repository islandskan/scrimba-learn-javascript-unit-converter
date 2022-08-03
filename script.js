// DOM ELEMENTS
const inputEl = document.getElementById('number');
const convertBtn = document.getElementById('convert__btn');
let lengthEl = document.getElementById('length-unit');
let volumeEl = document.getElementById('volume-unit');
let massEl = document.getElementById('mass-unit');

// UNIT VALUES
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

function convertToImperial(input, percentage) {
    const result = input * percentage;
    return result.toFixed(3);
}

function convertToMetric(input, percentage) {
    const result = input / percentage;
    return result.toFixed(3);
}

function renderUnits() {
    let baseValue = inputEl.value;

    lengthEl.textContent = `${baseValue} meter = ${convertToImperial(
        baseValue,
        meterToFeet
    )} feet  | ${baseValue} feet = ${convertToMetric(
        baseValue,
        meterToFeet
    )} meter`;

    volumeEl.textContent = `${baseValue} liters = ${convertToImperial(
        baseValue,
        literToGallon
    )} gallons | ${baseValue} gallons = ${convertToMetric(
        baseValue,
        literToGallon
    )} liters`;

    massEl.textContent = `${baseValue} kilos = ${convertToImperial(
        baseValue,
        kiloToPound
    )} pounds | ${baseValue} pounds = ${convertToMetric(
        baseValue,
        kiloToPound
    )} kilos`;

    inputEl.value = '';
}

// EVENT LISTENERS
convertBtn.addEventListener('click', renderUnits);
inputEl.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
        renderUnits();
    }
    return;
});
