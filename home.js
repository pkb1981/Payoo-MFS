// add money to the account
// step-1 add event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function (event) {
  // step-2 prevent page load after form submit
  event.preventDefault();
  // step-3 get money to be added to the account
  const addMoneyInput = document.getElementById('input-add-money').value;
  console.log(addMoneyInput);
  // get the pin no provided by the user
  const addPinNumber = document.getElementById('input-pin-number').value;
  console.log(addPinNumber);
  // validate the pin number
  if (addPinNumber === '1234') {
    console.log('adding money to your account');
    //set-4 get the current balance
    const balance = document.getElementById('account-balance').innerText;
    console.log(balance);
    //  change the input from string to float
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    // step-5 add money input with the balance
    const newBalance = balanceNumber + addMoneyNumber;
    console.log(newBalance);
    // step - 6 set/update the balance in UI / DOM
    document.getElementById('account-balance').innerText = newBalance;
  }
  else {
    alert('failed to add money please try again');
  }

})