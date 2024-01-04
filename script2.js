console.log('clear')

let depositeMoney = document.getElementById('deposite-amt') ;
//console.log(depositeMoney);

let withdrawMoney = document.getElementById('withdraw-amt');
//console.log(withdrawMoney);

let balanceMoney = document.getElementById('balance-amt');
//console.log(balanceMoney);


//----------------------deposite money-----------------------

document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeField = document.getElementById('deposite-bal');
    const depositeAmount = depositeField.value;

    let money = parseInt(depositeMoney.innerText)+parseInt(depositeAmount);
   
    depositeField.value = '';
    depositeMoney.innerText = money;
    let totalBalance = parseInt(balanceMoney.innerText)+parseInt(depositeAmount);
    balanceMoney.innerText = totalBalance;

})

// ----------------withdraw money-----------------------------

document.getElementById('withdraw-btn').addEventListener('click',
function(){
    const withdrawField = document.getElementById('withdraw-bal');
    let withdrawAmount = parseInt(withdrawField.value);
    let totalBalNumber = parseInt(balanceMoney.innerText);; 
    let totalWithdraw = parseInt(withdrawMoney.innerText);

    if(totalBalNumber > withdrawAmount){
        totalBalNumber -= withdrawAmount;
        balanceMoney.innerText = totalBalNumber;
       
        totalWithdraw += withdrawAmount;
        withdrawMoney.innerText = totalWithdraw;
    }
    else{
        alert("sorry!!! ")
    }

})

