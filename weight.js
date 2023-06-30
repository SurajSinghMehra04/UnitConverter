
const weight = document.querySelector('#amount');
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
    // 1 gram to kilogram
    g_kg: 'Divide the weight by 1000'
},

{
    // 2 gram TO pounds
    g_p: 'Divide the weight by 453.6'
},

{
    // 3 kilogrsm TO gram
    kg_g: 'Multiply the weight by 1000'
},

{
    // 4 pound TO kilogram
    p_kg: 'Divide the weight by 2.205'
},
{
    //5 kilogram TO pound
    kg_p: 'Multiply the weight by 2.205'
},
{
    // 6 pound TO gram
    p_g: 'Multiply the weight by 453.6'
},
];



// get options values
const units = [
    'kilogram',
    'pound'
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
        (convertFrom.value === 'gram') && (convertTo.value === 'gram') ||
        (convertFrom.value === 'pound') && (convertTo.value === 'pound') ||
        (convertFrom.value === 'kilogram') && (convertTo.value === 'kilogram')
    ){
        result.value = weight.value;
        formular.textContent = hints[0].sameUnit;
    }
    else if((convertFrom.value === 'gram') && (convertTo.value === 'pound')){
        result.value = weight.value / 453.6;
        formular.textContent = hints[2].g_p;
    }
    else if((convertFrom.value === 'gram') && (convertTo.value === 'kilogram')){
        result.value = weight.value / 1000;
        formular.textContent = hints[1].g_kg;
    }
    else if((convertFrom.value === 'pound') && (convertTo.value === 'gram')){
        result.value = weight.value * 453.6;
        formular.textContent = hints[6].p_g;
    }
    else if((convertFrom.value === 'pound') && (convertTo.value === 'kilogram')){
        result.value = weight.value / 2.205;
        formular.textContent = hints[4].p_kg;
    }
    else if((convertFrom.value === 'kilogram') && (convertTo.value === 'gram')){
        result.value = weight.value * 1000;
        formular.textContent = hints[3].kg_g;
    }
    else if((convertFrom.value === 'kilogram') && (convertTo.value === 'pound')){
        result.value = weight.value * 2.205;
        formular.textContent = hints[5].kg_p;
    }
}

// run function based on change and input events
convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
weight.addEventListener('input',convertUnits);