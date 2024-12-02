// console.log('linked with index.html')
//step-1 set event handler
document.getElementById('button-login').addEventListener('click', function (event) {
  //step-2 prevent default behavior or page reload
  event.preventDefault();
  console.log('login button clicked');
  // step-3 get the phone number & pin number
  const mobileNumber = document.getElementById('mobile-number').value;
  const pinNumber = document.getElementById('pin-number').value;

  // console.log(mobileNumber, pinNumber);

  // step-4 validate phone or pin
  // this is temporary way to cheque 
  if (mobileNumber === '5' && pinNumber === '1234') {
    console.log('you are logged in');
    // link to home page
    window.location.href = "./home.html";
  }
  else {
    alert('wrong phone no or pin');
  }
})
