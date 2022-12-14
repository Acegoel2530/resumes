var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";     // x is a list/array of all div tags containing  class = "tab"
  if (n == 0)
    document.getElementById("prevBtn").style.display = "none";
  else
    document.getElementById("prevBtn").style.display = "inline";

  if (n == (x.length - 1))
    document.getElementById("nextBtn").innerHTML = "Submit";
  else
    document.getElementById("nextBtn").innerHTML = "Next";

  fixStepIndicator(n)
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var x = document.getElementsByClassName("step");
  for (let i = 0; i < x.length; i++)
    x[i].className = x[i].className.replace(" active", "");
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

function Submit(){
  let firstnameField = document.getElementById("firstnameField").value;
  let lastnameField = document.getElementById("lastnameField").value;
  let nameTF = document.getElementById('nameTF')
  let namelF = document.getElementById('namelF')
  nameTF.innerHTML= firstnameField;
  namelF.innerHTML= lastnameField;
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");

  // Exit the function if any field in the current tab is invalid:
  // if (n == 1 && !validateForm()) return false;

  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;

  // if you have reached the end of the form, the form gets submitted:
  if (currentTab >= x.length)
    document.getElementById("regForm").Submit();
  else
    showTab(currentTab);    // Otherwise, display the correct tab
}

// function validateForm() {
//   // This function deals with validation of the form fields
//   var x, y, i, valid = true;
//   x = document.getElementsByClassName("tab");
//   y = x[currentTab].getElementsByTagName("input");
//   // A loop that checks every input field in the current tab:
//   for (i = 0; i < y.length; i++) {
//     // If a field is empty...
//     if (y[i].value == "") {
//       // add an "invalid" class to the field:
//       y[i].className += " invalid";
//       // and set the current valid status to false:
//       valid = false;
//     }
//   }
//   // If the valid status is true, mark the step as finished and valid:
//   if (valid) {
//     document.getElementsByClassName("step")[currentTab].className += " finish";
//   }
//   return valid; // return the valid status
// }
