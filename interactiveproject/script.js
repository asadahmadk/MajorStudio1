var res = document.getElementById('result');
var electricBill = document.getElementById('electricBill');
var oilBill = document.getElementById('oilBill');
var mileage = document.getElementById('mileage');
var lessthan4 = document.getElementById('lessthan4');
var morethan4 = document.getElementById('morethan4');
var newspaper = document.getElementById('newspaperYes')
var newspaperNo = document.getElementById('newspaperNo')
var aluminium = document.getElementById('aluminiumYes')
var aluminiumNo = document.getElementById('aluminiumNo')

// first try, this didnt work

// function calcCO2() {
// var a = electricBill.value;
// var b = oilBill.value;
// var c = mileage.value;
// var d = lessthan4.value;
// var e = morethan4.value
// var nchoices = document.getElementsById('input');
// var achoices = document.getElementsById('input');
// // loop through all the radio inputs
// for (i = 0; i < choices.length; i++) {
//   // if the radio is checked..
//   if (choices[i].checked) {
//     // add 1 to that choice's score
//     if (choices[i].value == 'newspaperYes') {
//       newspaperYes = 184;
//     }
//     if (choices[i].value == 'newspaperNo') {
//       newspaperNo = 0;
//     }
//     if (choices[i].value == 'aluminiumYes') {
//       aluminiumYes = 166;
//     }
//     if (choices[i].value == 'aluminiumNo') {
//       aluminiumNo = 0;
// }

// Check the if statements, 
function calcCO2() {
    var a = electricBill.value;
    var b = oilBill.value;
    var c = mileage.value;
    var d = lessthan4.value;
    var e = morethan4.value

    var calcCO = (105 * a)
        + (113 * b)
        + (0.79 * c)
        + (1100 * d)
        + (4400 * e)

        +

    if (nchoices: 'newspaperYes' && achoices: 'aluminiumYes') {
        calcCF=calcCO + 350;
    }else
    if (nchoices = 'newspaperNo' && achoices = 'aluminiumYes') {
        calcCF=calcCO + 166;
    }else
    if (nchoices = 'newspaperYes' && achoices = 'aluminiumNo') {
        calcCF=calcCO + 184;
    }else
    if (nchoices = 'newspaperNo' && achoices = 'aluminiumNo') {
        calcCF=calcCO + 0;
    }
    res.innerHTML = calcCF;

    console.log('calc is: ' + calcCO2);
