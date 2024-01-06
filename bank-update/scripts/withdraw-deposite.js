//----------------Deposite-------------------

document.getElementById('deposite-btn').addEventListener('click', function(){
    let inputDepositeAmount = getInputById('deposite-amt');
    let previousDepositeAmount = getAmountById('deposite');
    let newDepositeAmount = inputDepositeAmount + previousDepositeAmount;
    setElementById('deposite', newDepositeAmount);
    const previousBalance = getAmountById('balance');
    const newBalance = inputDepositeAmount + previousBalance;
    setElementById('balance', newBalance);
})



//----------------withdraw----------------------
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const inputWithdrawAmount = getInputById('withdraw-amt');
    const previousWithdrawAmount = getAmountById('withdraw');
    const newWithdrawAmount = inputWithdrawAmount + previousWithdrawAmount;
    setElementById('withdraw', newWithdrawAmount);
    const previousBalance = getAmountById('balance');
    if (previousBalance > inputWithdrawAmount){
        const newBalance = previousBalance - inputWithdrawAmount;
        setElementById('balance', newBalance);
    }
    else{
        alert("Sorry!")
    }
})