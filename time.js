// var input = document.getElementById('input');
// var result = document.getElementById('result');
// var inputType = document.getElementById('inputType');
// var resultType = document.getElementById('resultType');
// var inputTypeValue,
//     resultTypeValue;

// input.addEventListener("keyup", myResult);
// inputType.addEventListener("change", myResult);
// resultType.addEventListener("change", myResult);

// inputTypeValue = inputType.value;
// resultTypeValue = resultType.value;

// function myResult() {

//     inputTypeValue = inputType.value;
//     resultTypeValue = resultType.value;

//     if (inputTypeValue === "hour" && resultTypeValue === "hour") {

//         result.value = Number(input.value); // set answer to the result box
//     } else if (inputTypeValue === "hour" && resultTypeValue === "minute") {

//         result.value = Number(input.value) * 60; // set answer to the result box
//     } else if (inputTypeValue === "hour" && resultTypeValue === "second") {

//         result.value = Number(input.value) * 3600; // set answer to the result box
//     } else if (inputTypeValue === "minute" && resultTypeValue === "hour") {

//         result.value = Number(input.value) / 60; // set answer to the result box
//     } else if (inputTypeValue === "minute" && resultTypeValue === "minute") {

//         result.value = Number(input.value); // set answer to the result box
//     } else if (inputTypeValue === "minute" && resultTypeValue === "second") {

//         result.value = Number(input.value) * 60; // set answer to the result box
//     } else if (inputTypeValue === "second" && resultTypeValue === "hour") {

//         result.value = Number(input.value) / 3600; // set answer to the result box
//     } else if (inputTypeValue === "second" && resultTypeValue === "minute") {

//         result.value = Number(input.value) / 60; // set answer to the result box
//     } else if (inputTypeValue === "second" && resultTypeValue === "second") {

//         result.value = Number(input.value); // set answer to the result box
//     }

// }

const time = document.querySelector('#amount');
const convertFrom = document.querySelector('#from');
const convertTo = document.querySelector('#to');
const formular = document.querySelector('.content');
const result = document.querySelector('#result');
const selectElem = document.querySelectorAll('select');



// display formular hints
const hints = [{
    // 0
    sameUnit: 'gives the same value'
},

{
    // 1 second to minute
    c_m: 'divide the time value by 60'
},

{
    // 2 second TO hour
    c_km: 'divide the time value by 3600'
},

{
    // 3 minute TO second
    m_c: 'multiply the time value by 60'
},

{
    // 4 minute TO hour
    m_km: 'divide the time value by 60'
},
{
    //5 hour TO second
    km_cm: 'multiply the time value by 3600'
},
{
    // 6 hour TO minute
    km_m: 'multiply the time value by 60'
},
];



// get options values
const units = [
    'minute',
    'hour'
];



for (let i = 1; i >= 0; i--) {
    let option = `<option value=${units[i]}>${units[i]}</option>`;
    selectElem[0].firstElementChild.insertAdjacentHTML('afterend', option);
}
for (let i = 1; i >= 0; i--) {
    let option = `<option value=${units[i]}>${units[i]}</option>`;
    selectElem[1].firstElementChild.insertAdjacentHTML('afterend', option);
}

// function to convert units
function convertUnits (){
    if (
        (convertFrom.value === 'second') && (convertTo.value === 'second') ||
        (convertFrom.value === 'minute') && (convertTo.value === 'minute') ||
        (convertFrom.value === 'hour') && (convertTo.value === 'hour')
    ){
        result.value = time.value;
        formular.textContent = hints[0].sameUnit;
    }
    else if((convertFrom.value === 'second') && (convertTo.value === 'minute')){
        result.value = time.value / 60;
        formular.textContent = hints[1].c_m;
    }
    else if((convertFrom.value === 'second') && (convertTo.value === 'hour')){
        result.value = time.value / 3600;
        formular.textContent = hints[2].c_km;
    }
    else if((convertFrom.value === 'minute') && (convertTo.value === 'second')){
        result.value = time.value * 60;
        formular.textContent = hints[3].m_c;
    }
    else if((convertFrom.value === 'minute') && (convertTo.value === 'hour')){
        result.value = time.value / 60;
        formular.textContent = hints[4].m_km;
    }
    else if((convertFrom.value === 'hour') && (convertTo.value === 'second')){
        result.value = time.value * 3600;
        formular.textContent = hints[5].km_cm;
    }
    else if((convertFrom.value === 'hour') && (convertTo.value === 'minute')){
        result.value = time.value * 60;
        formular.textContent = hints[6].km_m;
    }
}

// run function based on change and input events
convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
time.addEventListener('input',convertUnits);