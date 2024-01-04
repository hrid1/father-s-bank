console.log('clear')

let depositeMoney = document.getElementById('deposite-amt') ;
//console.log(depositeMoney);

let withdrawMoney = document.getElementById('withdraw-amt');
console.log(withdrawMoney);

let balanceMoney = document.getElementById('balance-amt');
console.log(balanceMoney);

document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeField = document.getElementById('deposite-bal');
    const depositeAmount = depositeField.value;
    console.log(depositeAmount);
    let money = depositeMoney.innerText+depositeAmount;
    console.log(money);
    depositeField.value = '';
    depositeMoney.innerText = money;
    


})