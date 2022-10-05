/*1
step(1) ADd event handler with the withdraw button
step 2 : get the withdraw value from the input field
step 2.5 : convert String to Number
step 3 : get prev withdraw Total

step 4 : calculate total withdraw amnt
step 5 : set totl with amount



*/
document.getElementById('btn-withdraw').addEventListener('click', function () {
	const withDrawField = document.getElementById('withdraw-field');
	const newWithdrawAmountStr = withDrawField.value;
	const newWithdrawAmount =parseFloat(newWithdrawAmountStr);
	
	//step 3 
	const withdrawTotalElement = document.getElementById('withdraw-total');
	const PrevioustotalWdAmntString = withdrawTotalElement.innerText;
	const prevWithdrawTotal = parseFloat(PrevioustotalWdAmntString);
	console.log(prevWithdrawTotal)

	//step  4 : 
	const currentWithdrawTotal = newWithdrawAmount + prevWithdrawTotal;
	//set the balance total
	withdrawTotalElement.innerText = currentWithdrawTotal;

	withDrawField.value = '';

	// step 5 
	const balanceTotalElement = document.getElementById('balance-total');
	const prevBalanceTotalString = balanceTotalElement.innerText;
	const prevBalanceTotal = parseFloat(prevBalanceTotalString);
	 //step 6 
	const newBalanceTotal = prevBalanceTotal - newWithdrawAmount;
	// step 7 set the blnce total
	balanceTotalElement.innerText = newBalanceTotal;

})
