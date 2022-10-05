//step 1: add event to deposite button

document.getElementById('btn-deposit').addEventListener('click', function () {
	//step 2 : get the deposit amount from the deposite input field

	const depositField = document.getElementById('deposit-field')
	const NewDpstAmountString = depositField.value;
	const NewDpstAmount = parseFloat(NewDpstAmountString);
	 //step 3 : get the total deposit Amount
	// for non input use innerText to get the text
	
	const depositTotal = document.getElementById('deposit-total')
	const PrevioustotalDpAmntString = depositTotal.innerText;
	const PrevioustotalDpAmnt = parseFloat(PrevioustotalDpAmntString);
// step-4 : Add numbers to set the total deposit
	const currentDpTotal = PrevioustotalDpAmnt + NewDpstAmount;

	depositTotal.innerText = currentDpTotal;

	//step - 5: get the current total Balance

	const balanceTotalElement = document.getElementById('balance-total');
	let prevBalanceTotalString = balanceTotalElement.innerText;
	const prevBalanceTotal = parseFloat(prevBalanceTotalString)

	//step -6 : calculate current total balance
	const currentBalanceTotal = prevBalanceTotal + NewDpstAmount;
	//set the  blnce total
	balanceTotalElement.innerText = currentBalanceTotal;


	
	//step-7: clear the deposit field
	depositField.value = '';

	
})