const depositValue = document.getElementById('deposit-value');
const withdrawValue = document.getElementById('widthdraw-value');
const totalValue = document.getElementById('total-amount');
const depositInput = document.getElementById('deposit-inpt');
const depositBtn = document.getElementById('deposit-btn');
const withdrawInput = document.getElementById('widthdraw-inp');
const withdrawBtn = document.getElementById('withdraw-btn');





/** here **/ 
depositBtn.addEventListener('click', function (){
//? step 1 
let newDepositAmount = parseInt(parseFloat(depositInput.value));
depositInput.value = '';
if (isNaN(newDepositAmount) ) {
    return alert('Please Enter Deposit  Amount')
    
}
//? step 2
let previousDepositAmount = parseInt(parseFloat(depositValue.innerText)); 

depositValue.innerText = newDepositAmount + previousDepositAmount;
let totalDefultValue = parseInt(parseFloat(totalValue.innerText)); ;

totalValue.innerText = totalDefultValue + newDepositAmount;



});
withdrawBtn.addEventListener('click', function (){


let newWithdrawAmount = parseInt(parseFloat(withdrawInput.value));
withdrawInput.value = '';
let previousWithdrawAmount = parseInt(parseFloat(withdrawValue.innerText)); 

withdrawValue.innerText = newWithdrawAmount + previousWithdrawAmount;
let totalDefultValue = parseInt(parseFloat(totalValue.innerText)); ;
let securityAmount  = totalDefultValue - newWithdrawAmount;
if (securityAmount <= 1000 ) {
    return alert(' Please you cannot withdraw  below $1000');
    
}
totalValue.innerText = securityAmount;

});



