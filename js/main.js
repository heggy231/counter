var count = 0;

var myResult = document.querySelector('h1');
var myInput = document.querySelector('input');

document.getElementById("plusMe").addEventListener('click', plus);
document.getElementById("minusMe").addEventListener('click', minus);

plusMe.addEventListener('click', plus);
// plusMe.addEventListener('click', function() {
//   plusMe // increase input placeholder value
// });
// minusMe.addEventListener('click', )

startCount();

function plus() {
  // myInput is the steps (10 or 1
  // count is the result and myInput.val is the step
  count += myInput.value;
  // render the result on the screen
  myOutput();
}

function minus() {
  count -= myInput.value;
  // render the result on the screen
  myOutput();
}

function myOutput() {
  myResult.textContent = count;
}

// write a function that assigns the input value
function startCount() {
  count = 0;
  myInput.value = 1;
  myOutput();
}
