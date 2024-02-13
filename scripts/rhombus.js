function calculateRhombusArea() {
    const d1 = getInputValueById('rhombus-d1');
    const d2 = getInputValueById('rhombus-d2');
    const area = d1 * d2;

    setInnerTextById('rhombus-area',area)
}

// function getRhombusBase() {
//     const baseInput = document.getElementById('rhombus-d1');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
// }

function getInputValueById(inputFieldID) {
    const inputField = document.getElementById(inputFieldID);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}


function setInnerTextById(elementId,text) {
    const element = document.getElementById(elementId);
    element.innerText = text;
}