window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 10000, years: 10, rate: 4.5};
  const amountInput = document.querySelector('#loan-amount');
  amountInput.value = values.amount;
  const yearsInput = document.querySelector('#loan-years');
  yearsInput.value = values.years;
  const rateInput = document.querySelector('#loan-rate');
  rateInput.value = values.rate;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // const values = {amount: 10000, years: 10, rate: 4.5};
  const P = values.amount;
  const n = values.years * 12;
  const i = (values.rate/100) / 12;
  return ((P * i)/(1 - Math.pow((1+i),-n))).toFixed(2);
  // answer is a string because ".toFixed" makes value a string
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector('#monthly-payment').innerText = '$' + monthly;
}
