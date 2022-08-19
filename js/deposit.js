// step 1
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2
    const newWithdrawAmount = getInputFieldValueById('deposit-field');
    // step 3
    const previousWithdrawTotal = getTextElementValueById('deposit-total');
    // step 4
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // step 4-5
    setTextElementValueById('deposit-total', newWithdrawTotal);
    // step 5
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newWithdrawAmount;
    // step 7
    setTextElementValueById('balance-total', newBalanceTotal);
})