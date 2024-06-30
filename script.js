"use strict";
/* let message; // let, const, var
message = "Hello";

console.log("Третий скрипт");
console.log(typeof(message));

message = 25;

message = undefined;
console.log(message);
console.log(typeof(message)) */

/* let a = 10;
let b, c;
b = "Hello"
console.log(a, b);
const pi = 3.14;
console.log(pi); */

// let firstname = "Sergey";
// alert('Helo, ${firstname}');

// let res = prompt("Ваше имя");
// console.log("Hello", res);
// alert("Hello ", res);

// let c = 23;
// let d = "6";

// console.log(parseInt("21.84"));
// console.log(parseFloat("21.84"));
// console.log(Number("21.84"));
// console.log(+("21.84"));

// let login = prompt("Login", "admin");
// let password = prompt("Password", "123456");
// alert("***Данные для входа***\tВаш логин: " + login + "\tВаш пароль: " + password);

// let str = "Инструкция: \nДокумент \"script.js\" файлы лежат в папке D:\\\\folder\\file.txt";
// alert(str);

// let a = prompt("input 1 num", 5);
// let b = +prompt("input 2 num", 7);

// a = parseInt(a);
// b = Number(b);
// alert(a + b);

// let a = 0, b = 0;
// let c = a++ + 2;
// let d = ++b + 2;
// console.log("a: ", a);
// console.log("b: ", b);
// console.log("c: ", c);
// console.log("d: ", d);

// let a = 1;
// let b = a++;
// let c = b + 5 + a;
// console.log(c); //8

// let a = +prompt("1 число: ", 5);
// let b = +prompt("2 число: ", 4);
// let c = +prompt("3 число: ", 6);

// alert("summ : " + (a + b + c))

// 7 > 3 ? alert("7"): alert("3");

// let ch = prompt("Угадайте число от 1 до 10");
// let num = 7;
// ch == num ? alert("Угадали!"): ch < num ? alert("Загаданное число больше") : alert("Заданное число меньше");

// alert(a);

// let variable = 5;
// if(variable){
//     console.log("TRUE");
// }
// else{
//     console.log("FALSE");
// }

// if(5 ==5 && 5 > 2){
//     console.log("TRUE");
// }
// else{
//     console.log("FALSE");
// }

// console.log(!true);

// let a = +prompt("Res 2 + 2 ");
// switch(a){
//     case 4:{
//         alert("Yes");
//     } break;
//     case 3: 
//     case 5: {
//         alert("Wrong");
//     }
//         break;
//     default:
//         alert("DO NOT KNOW")
// }

// document.write("Text in browser")

// let i = 0;
// while(i<7){
//     document.write("Квадрат: " + ++i + " равен " + i** 2 + "<br>");
    
// }

// let a, res = 1;
// do{
//     a = +prompt("Введите число:", 10);
//     if(a==0){
//         break;
//     }
//     if(a < 0){
//         continue;
//     }
//     res*=a;
// }while(true);
// alert("Произведение введенных чисел: " + res);

// let i = 0;
// do{
//     if(i==3){
//         i++;
//         continue;
//     }
//     if(i==6){
//         break;
//     }
//     document.write(i + " ");
//     i++;
// }while(i < 10);

// for(let i = 1; i < 6; i++){
//     if(i == 3){
//         continue;
//     }
//     if (i == 6){
//         break;
//     }
//     document.write(i + " ");
// }
// let i = 1;
// for(; ;){
//     if (i == 12){
//         break;
//     }
//     document.write(i + " ");
//     i++;
// }

// for(let i = 1; i < 12; i++) {
//     document.write(i + " ");
// }
// document.write("<br>" + i);

// for(let i = 0; i < 4; i ++){
//     document.write("+++ <br>");
//     for(let j = 0; j < 2; j++){
//         document.write("-- <br>");
//     }
// }

// let tr = prompt("Введите количество строк: ");
// let td = prompt("Введите количество столбцов:");
// let symbol = prompt("Введите символ:");
// document.write("<table border = '1'>");
// for(let i = 1; i < tr; i++){
//     document.write("<tr>");
//     for(let j = 0; j < td; j++){
//         document.write("<td>"+symbol+"</td>");
//     }
//     document.write("<tr>");
// }
// document.write("</table>");

// document.write("<table border = '1' width='260'>");
// for(let i = 1; i < 11; i++){
//     document.write("<tr>");
//     for(let j = 1; j < 11; j++){
//         if(j % 2 == 0 && i % 2 == 0)
//             document.write("<td bgcolor = 'red'>"+i*j+"</td>");
//         else
//             document.write("<td bgcolor = 'yellow'>" + i * j + "</td>")
//     }
//     document.write("<tr>");
// }
// document.write("</table>");

// let arr1 = [2,6,8];
// let arr2 = new Array(1, 5, 7);

// let arr3 = [5];
// let arr4 = new Array(5); // массив на 5 элементов, но пустой

// console.log(arr1);
// arr1[0] += 100;
// console.log(arr1);
// arr1[10] = 200;
// arr1[5]=7;
// console.log("length=", arr1.length)
// let f = [1,2,3,4,5,6];
// console.log(f);
// f.length =3;
// console.log(f);
// document.write(arr1);
// alert(arr1); 

// let arr = [5,9,-3,-1, 4,-8,7, 2, -6];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//         sum += arr[i]
//     }
    
// }
// document.write(sum);

// Написать программу, которая позволяет заполнять массив с клавиату
// let mas = new Array(5);
// for(let i = 0; i < mas.length; i++){
//     mas[i] = prompt("Введите " + (i+1) + "элемент массива:");

// }
// console.log(mas);

// for(let i = mas.length-1; i >= 0; i--){
//     document.write(mas[i] + " ")
// }

document.write('<table>');
document.write("<table border = '1' width='260'>");

for(let i = 1; i < 11; i++) {
    document.write('<tr>');
    for(let j = 1; j < 11; j++) {
        if((i + j) % 2 == 0) {
            document.write("<td bgcolor = 'red'>"+i*j+"</td>");
        }
        else {
            document.write("<td bgcolor = 'yellow'>"+i*j+"</td>");

    }

}
    document.write('</tr>');
}
document.write('</table>');
