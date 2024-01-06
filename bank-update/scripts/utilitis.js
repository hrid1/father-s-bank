console.log('all ok')

function getInputById(inputId){
    let inputField = document.getElementById(inputId);
    let inputval = inputField.value ;
    let inputAmt = parseFloat(inputval);
    inputField.value = '';
    return inputAmt;
}

function getAmountById(typeOfId){
    const previousAmt = document.getElementById(typeOfId);
    const amount  = previousAmt.innerText;
    const amountNumber = parseFloat(amount);
    return amountNumber;
    //console.log(amountNumber);
}

function setElementById(elementId, newAmount){
    let previousVal = document.getElementById(elementId);
    previousVal.innerText = newAmount;
}


