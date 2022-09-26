// step-1: add event listenter to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: get the deposit amoutn from the deposit input field
    // For input field use .value to the get the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-7: clear the deposit field
    depositField.value = '';

    // error-2:
    if (isNaN(newDepositAmount)) {
        alert('Please enter a valid number');
        return;
    }

    // error-3:
    if (newDepositAmount < 0) {
        alert('Enter positive amount');
        return;
    }

    // step-3: get the current deposit total
    // for non-input (element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4: add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal.toFixed(2);

    // step-5: get ballance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal.toFixed(2);
});