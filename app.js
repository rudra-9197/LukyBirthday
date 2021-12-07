const birthDate = document.querySelector("#birth-date");
var luckyNo = document.querySelector("#lucky-No");
var checkButton = document.querySelector("#check-Button");
var message = document.querySelector("#message");

checkButton.addEventListener("click", checkLuckyOne);

function checkLuckyOne() {
  var dateofBirth = birthDate.value;
  dateMonthYear = dateofBirth.replaceAll("-", "");
  doB = dateMonthYear.split("");
  const sum = calculateSum(doB);
  if (sum % luckyNo.value == 0) {
    message.innerText = "ohhh!!!....your Date of birth is lucky😊";
  } 
  else {    message.innerText = "Not a lucky one☹️...just for fun";
   }
 
}

function calculateSum(doB) {
  let sum = 0;
  for (let i = 0; i < doB.length; i++) {
    sum += Number(doB[i]);
  }

  return sum;
}

//doB = dateofBirth.split("-");
//console.log(doB);
//const year = Number(doB[0]);
//const Month = Number(doB[1]);
//const day = Number(doB[2]);

// var sum = year + Month + day;


