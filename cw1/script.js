// let form = document.form1;
// form.addEventListener("submit", event => {
//     event.preventDefault();

//     let title = form.title.value;
//     let text = form.text.value;
//     let description = form.description.value;
//     saveForm({title, text, description});
// })

// function saveForm(data){
//     let {title, text, description} = data;
//     let formData = {
//         date: new Date().toLocaleDateString(),
//         title,
//         text,
//         description
        
//     }
//     console.log("Form data: ", formData)
// }

// class User{
//     constructor(name){
//         this.name = name;
//     }
//     get name(){
//         return this.login;

//     }
//     set name(value){
//         if(value.length < 6){
//             alert("Имя слишком короткое");
//             return;
//         }
//         this.login = value;
//     }
//     sayHi(){
//         document.write("Hell0, " + this.name);
//     }
// }

// let user = new User("Иван");

// user._name="Петр";

// class Animal{
//     constructor(name){
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed){
//         this.speed = speed;
//         document.write(`${this.name} бежит со скоростью ${this.speed} км/ч.<br>`);
//     }
//     stop(){
//         this.speed = 0;
//         document.write(`${this.name} стоит <br>`);
//     }

// }

// class Rabbit extends Animal{
//     constructor(name, earLength){
//         super(name);
//         this.earLength = earLength;
//     }
//     hide(){
//         document.write(`${this.name} прячется <br>`);
//     }
//     stop(){
//         super.stop();
//         this.hide();
        
//     }
// }
// let animal = new Animal("Мой питомец");
// animal.run(80);
// animal.stop();

// let rabbit = new Rabbit("Белый кролик");
// rabbit.run(5);
// rabbit.hide(5);
// rabbit.stop();

// class Header{
//     constructor(img, h1, h2){
//         this.src = img;
//         this.h1 = h1;
//         this.h2 = h2;
//         this.out = "";
//     }
//     render(id){
//         this.out = `
//             <img src="${this.src}" alt = "">
//             <h1>${this.h1}</h1>
//             <h2>${this.h2}</h2>
//             `;
//             document.querySelector(`#${id}`).innerHTML = this.out;
//     }
// }
// class HeaderExt extends Header{
//     constructor(img, h1, h2, tel){
//         super(img, h1, h2);
//         this.tel = tel;
//     }
//     get tel(){
//         return this._tel;
//     }
//     set tel(t){
//         let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
//         if(reg.test(t)){
//             this._tel = t;
//         }
//         else{
//             alert("Некорректный номер телефона");
//             return;
//         }
//     }
//     render(id){
//         super.render(id);
//         this.out += `
//             <h2>${this.tel}</h2>
//         `;
//         document.querySelector(`#${id}`).innerHTML = this.out;
//     }
// }

// let img3 = "https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-8/512/27-128.png";
// let header3 = new HeaderExt(img3, "Класс-наследник", "Описание наследника", "+7 999 555-55-5");
// header3.render("header-ext");
// header3.tel = "+7 999 212-57-13";
// let img = "https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-8/512/27-128.png";
// let header = new Header(img, "Заголовок", "Описание");
// header.render("header");

// let img2 = "https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-8/512/27-128.png";
// let header2 = new Header(img2, "Второй заголовок", "Другое описание");
// header2.render("header2");

// let info = '{"first_name":"Ivan","age":36,"mother":{"name":"Olga","age":58},"children":["Kate","Igor","Misha"],"married":true,"dog":null}';

// console.log(info);

// let person = JSON.parse(info);


// console.log(person);
// person.first_name = "Petr";
// delete person.age;
// person.work = "programmer";

// for(let i in person){
//     document.write(i + ": " + person[i] + "<br>");

// }
// let personString = JSON.stringify(person);
fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => console.log(json))