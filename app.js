var birthDate = document.querySelector("#birth-date");
var luckyNo = document.querySelector("#lucky-No");
var checkButton = document.querySelector("#check-Button");
const dateofBirth = birthDate.value
 var sumArray = dateofBirth.split('-');
var year = sumArray[0];

checkButton.addEventListener( "click",checkLuckyOne);
function checkLuckyOne(){
console.log(dateofBirth);
   
}
