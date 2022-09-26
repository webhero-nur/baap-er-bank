/**
 * step-1: add event handler for withdraw button
 * step-2: get the withdraw amount from the withdraw input field
 * step-2.a: converting input field value to a number using parseFloat()
 * step-3: get current withdraw total 
 * step-3.a: converting innerText String value to a number using parseFloat()
 * step-4: calculating total withdraw amount
 * step-4.a: set total withdraw amount
 * step-5: get the previous balance total amount
 * step-5.a: converting string value to a number
 * step-6: calculate new balance after withdraw
 * step-6.a: set new total balance
 * step-7: clear the withdraw input field
 * 
 * error handle
 * error-1: checking if balance is enough to perform withdraw
 * error-2: checking if the input is a number or not
 * error-3: checking if the input is a positive number or not
*/

// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    // step-2.a:
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7:
    withdrawField.value = '';

    // error-2:
    if (isNaN(newWithdrawAmount)) {
        alert('Please enter a valid number');
        return;
    }

    // error-3:
    if (newWithdrawAmount < 0) {
        alert('Enter positive amount');
        return;
    }

    // step-3:
    const currentWithdrawTotalElement = document.getElementById('withdraw-total');
    const currentWithdrawTotalString = currentWithdrawTotalElement.innerText;
    // step-3.a:
    const currentWithdrawTotal = parseFloat(currentWithdrawTotalString);

    // step-4:
    const newWithdrawTotalAmount = currentWithdrawTotal + newWithdrawAmount;

    // step-5:
    const currentBalanceTotalElement = document.getElementById('balance-total');
    const currentBalanceTotalString = currentBalanceTotalElement.innerText;
    // step-5.a:
    const currentBalanceTotal = parseFloat(currentBalanceTotalString);

    // error-1:
    if (newWithdrawTotalAmount > currentBalanceTotal) {
        alert('Not enough balance');
        return;
    }

    // step-6:
    const newCurrentBalanceTotal = currentBalanceTotal - newWithdrawAmount;

    // step-6.a:
    if (newCurrentBalanceTotal > 0 && newCurrentBalanceTotal < 10) {
        currentBalanceTotalElement.innerText = '0' + newCurrentBalanceTotal.toFixed(2);
    }
    else {
        currentBalanceTotalElement.innerText = newCurrentBalanceTotal.toFixed(2);
    }

    // step-4.a:
    if (newWithdrawTotalAmount > 0 && newWithdrawTotalAmount < 10) {
        currentWithdrawTotalElement.innerText = newWithdrawTotalAmount.toFixed(2);
    }
    else {
        currentWithdrawTotalElement.innerText = newWithdrawTotalAmount.toFixed(2);
    }
});