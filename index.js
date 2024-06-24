//console.log("hi");
let degree = document.getElementById("degree");
let ctof = document.getElementById("ctof");
let ftoc = document.getElementById("ftoc");
let answer = document.getElementById("answer");
let temp;
console.log("hi");
function submits() {
  //console.log("hi");
  if (ctof.checked) {
    //console.log("ctof", degree.value);
    temp = Number(degree.value);
    temp = (temp * 9) / 5 + 32;
    answer.innerHTML = temp.toFixed(1) + "°F";
  } else if (ftoc.checked) {
    //console.log("ftoc", degree.value);
    temp = Number(degree.value);
    temp = ((temp - 32) * 5) / 9;
    answer.innerHTML = temp.toFixed(1) + "°C";
  } else {
    answer.innerHTML = "Please select a unit.";
  }

  //console.log(typeof degree, degree, typeof ctof, ctof, ftoc);
}
