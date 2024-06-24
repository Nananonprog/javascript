const prompt = require('prompt-sync')();
var number = prompt("Введите 5-значное число: ");

let proizv = 1;
let sum = 0;

for(var i = 0; i< number.length; i++){
    var digit = parseInt(number.charAt(i));

    proizv *= digit;
    sum+=digit;
}
    let avg = sum / number.length;

    console.log("Произведение цифр: " + proizv);
    console.log("Среднее арифметическое: " + avg.toFixed(1));
