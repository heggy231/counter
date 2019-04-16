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
  // myInput how much inc/dec by 10 or 1?
  // count is the top number result and myInput.val is the step
  count += Number(myInput.value);
  // render the result on the screen
  myOutputDisplay();
}

function minus() {
  count -= Number(myInput.value);
  // render the result on the screen
  myOutputDisplay();
}

// rendering the result on top of step number
function myOutputDisplay() {
  // calculated value is myResult
  myResult.textContent = count;
  // if count is a neg than display in red color
  if (count < 0) {
    // apply .red {class="red"} to myResult
    myResult.className = 'red';
  } else {
    myResult.className = '';
  }
}

// write a function that assigns the input value initialize the value for count (0) and input (1)
function startCount() {
  count = 0;
  myInput.value = 1;
  myOutputDisplay();
}
