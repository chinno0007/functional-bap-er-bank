/* 
1.add withdraw btn event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous Withdraw amount by Using getTextElementValueById function
4. calculate new withdrawTotal and set the value
4-5. set new withdraw total by using setTextElementValue
5. get previous balance by using getTextElementValueById function
*/


// step 1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step 2
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    // step 3
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    // step 4
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // step 4-5
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    // step 5
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // step 7
    setTextElementValueById('balance-total', newBalanceTotal);
})
