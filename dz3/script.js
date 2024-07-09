
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let createColor = () => Math.floor(Math.random() * 256);
for (let i = 0; i < months.length; i++) {
    monthName = months[i];
    randomColor = "rgb("+ createColor()+ "," + createColor() + ", " + createColor() + ")";
    document.write(`<div style="background-color: ${randomColor}">${monthName}</div>`);
    
}
