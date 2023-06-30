
const temperature = document.querySelector('#amount');
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
    // 1 celsius to kelvin
    g_kg: 'temperature + 273.15'
},

{
    // 2 celsius TO fahrenheits
    g_p: 'temperature * 9/5) + 32'
},

{
    // 3 kelvin TO celsius
    kg_g: 'temperature - 273.15'
},

{
    // 4 fahrenheit TO kelvin
    p_kg: 'temperature - 32) * 5/9 + 273.15'
},
{
    //5 kelvin TO fahrenheit
    kg_p: '(temperature - 273.15) * 9/5 + 32'
},
{
    // 6 fahrenheit TO celsius
    p_g: 'temperature - 32) * 5/9'
},
];



// get options values
const units = [
    'kelvin',
    'fahrenheit'
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
        (convertFrom.value === 'celsius') && (convertTo.value === 'celsius') ||
        (convertFrom.value === 'fahrenheit') && (convertTo.value === 'fahrenheit') ||
        (convertFrom.value === 'kelvin') && (convertTo.value === 'kelvin')
    ){
        result.value = temperature.value;
        formular.textContent = hints[0].sameUnit;
    }
    else if((convertFrom.value === 'celsius') && (convertTo.value === 'fahrenheit')){
        result.value = ((temperature.value*9)/5) + 32;
        formular.textContent = hints[2].g_p;
    }
    else if((convertFrom.value === 'celsius') && (convertTo.value === 'kelvin')){
        result.value = (temperature.value)*1  + 273.15;
        formular.textContent = hints[1].g_kg;
    }
    else if((convertFrom.value === 'fahrenheit') && (convertTo.value === 'celsius')){
        result.value = ((temperature.value)-32) * 0.555556;
        formular.textContent = hints[6].p_g;
    }
    else if((convertFrom.value === 'fahrenheit') && (convertTo.value === 'kelvin')){
        result.value = (((temperature.value) - 32) * 0.555556) + 273.15;
        formular.textContent = hints[4].p_kg;
    }
    else if((convertFrom.value === 'kelvin') && (convertTo.value === 'celsius')){
        result.value = temperature.value - 273.15; ;
        formular.textContent = hints[3].kg_g;
    }
    else if((convertFrom.value === 'kelvin') && (convertTo.value === 'fahrenheit')){
        result.value = (((temperature.value)-273.15)*1.8)+32;
        formular.textContent = hints[5].kg_p;
    }
}

// run function based on change and input events
convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
temperature.addEventListener('input',convertUnits);