// console.log('linked with index.html')
//step-1 set event handler
document.getElementById('button-login').addEventListener('click', function (event) {
  //step-2 prevent default behavior or page reload
  event.preventDefault();
  console.log('login button clicked');
  // step-3 get the phone number
  const mobileNumber = document.getElementById('mobile-number').value;
  console.log(mobileNumber);
})
