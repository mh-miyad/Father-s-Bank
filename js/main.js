const depositValue = document.getElementById('deposit-value');
const widthdrawValue = document.getElementById('widthdraw-value');
const totalAmount = document.getElementById('total-amount');
const depositInput = document.getElementById('deposit-inpt');
const widthdrawInput = document.getElementById('widthdraw-inp');
const depositButton = document.getElementById('deposit-btn');
const widthdrawButton = document.getElementById('withdraw-btn');

let defultValue = 1200;

totalAmount.innerText = defultValue;

depositButton.addEventListener('click',function () {

let valueOfdeposit = parseInt(depositInput.value);
depositValue.innerText = valueOfdeposit;

totalAmount.innerHTML =defultValue  + valueOfdeposit;
depositInput.value = '';

});
widthdrawButton.addEventListener('click',function () {

let valueOfWidthdraw = parseInt(widthdrawInput.value);
widthdrawValue.innerText =  valueOfWidthdraw;

totalAmount.innerHTML = defultValue  - valueOfWidthdraw;
widthdrawInput.value = '';

});