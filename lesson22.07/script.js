// let input = document.querySelectorAll("input[type='checkbox']");

// for(let i = 0; i < input.length; i++) {
//     input[i].addEventListener("click", checkAll);

// }

// let numChecked;
// function checkAll() {
//     numChecked = 0;
//     for (let i = 0; i < input.length; i++) {
//         if(input[i].checked && input[i].type == "checkbox"){
//             numChecked++;
//         }
//     }
//     if(numChecked == 3){
//         for (let i = 0; i < input.length; i++) {
//             if(!input[i].checked && input[i].type == "checkbox"){
//                 input[i].disabled = true;
//             }
//     }
// } else{
//     for (let i = 0; i < input.length; i++) {
//             input[i].disabled = false;
        
//     }

// }
// }

// let city = document.querySelector("#city");
// city.addEventListener("change", setImage);

// function setImage() {
//     let cities = city.selectedIndex;
//     let options = city.options;
//     let code = options[cities].value;

//     let div = document.querySelector("#image");
//     div.innerHTML = "<img src='img/" + code + ".png'>"
// }

// let gas = document.querySelectorAll('.petrol');

// for(let i = 0; i < gas.length; i++){
//     gas[i].addEventListener("click", function(){
//         let gallons = document.querySelector(".gallons").value;
//         let amount = this.getAttribute("data-get");

//         let res = gallons * amount;
//         let sum = document.querySelector(".sum");
//         sum.innerHTML = res;

//     })
// }

// let obj = {
//     name: "Гомер",
//     colors:{
//         first: "yellow",
//         second: "blue"
//     },
//     color: [
//         "black",
//         "white",
//         "red",
//         "blue"        
//     ],
//     hello: function(){
//         document.write("Привет");
//     }
// }

// document.write(obj.name + " " + obj.colors.second + " " + obj.color[2]);

// let fil = obj.color.filter(function(elem){
//     return elem.length < 5;
// });

// document.write("<br>" + fil + "<br>");

let calc = {
    num1 : 5,
    num2: 4,
    calc: function(){
        calc.res = calc.num1 * calc.num2;
    }
}

document.write(calc.num1 + "<br>");
calc.calc();
document.write(calc.res);