// alert(document.head.innerHTML);
// let title = document.querySelector("h1").node;
// console.log(title)

// let elem = document.querySelector("#root");
// let tag = document.createElement("p");
// let node = document.createTextNode("Новый текст");
// tag.append(node);

// elem.append(tag); // добавляет новый элемент последним дочерним элементом внутри родительского

// elem.prepend(tag); // добавляет новый элемент первым дочерним элементом родительского
 
// elem.before(tag); // добавляет новый элемент до выбранного id

// elem.after(tag); // добавляет новый элемент после выбранного id

// elem.replaceWith(tag); 

// let list = document.querySelector("ul");

// let newItem =  document.createElement("li"); // <li></li>
// newItem.innerHTML = "Новый <i>элемент списка</i>"; // добавление содержимого

// list.append(newItem);

// let i = 1;

// document.querySelector("#func2").addEventListener("click", add);
// document.querySelector("#func1").addEventListener("click", change);

// function add() {
//     let elem = document.createElement("li");
//     elem.innerHTML = "Water_" + i;
//     let list2 = document.querySelector("#list2");
//     list2.append(elem);
//     i++;
// }

// function change(){
//     let elem  = list2.lastChild;
//     document.querySelector("#list1").append(elem);
// }

// let div = document.querySelector("#root");
// div.insertAdjacentHTML('beforebegin', '<p>До выбранного элемента</p>');
// div.insertAdjacentHTML('afterend', '<p>После выбранного элемента</p>');
// div.insertAdjacentHTML('afterbegin', '<p>Первым внутри выбранного элемента</p>');
// div.insertAdjacentHTML('beforeend', '<p>Последним внутри выбранного элемента</p>');

// let one = document.querySelector("#p1");
// one.remove(); // удаляет выбранный элемент
// let two = document.querySelector("#p2");

// two.after(one);

// let ul = document.querySelector("ul");

// let li = ul.cloneNode(true);

// li.querySelector('li').innerHTML = "Начало клонируемых элементов";
// ul.after(li);

// let list = document.querySelector("ul.list");
// list.insertAdjacentHTML("beforebegin", "<h2>Список </h2><hr>");
// let list_inner = document.querySelector("h2");
// list_inner.insertAdjacentText("beforeend", "планет");

// list.insertAdjacentHTML("afterend", "<hr>");

// let hr = document.querySelectorAll("hr")[1];
// let h4 = document.createElement("h4");
// h4.innerHTML = "Конец списка";
// // hr.insertAdjacentElement("afterend", h4);
// hr.insertAdjacentElement("afterend", h4);

// let idRemove = setInterval(function(){
//     let li = document.querySelector("ul.list > li");
//     if(li == null){
//         clearInterval(idRemove);
//         alert("Список удален");
//         list.insertAdjacentHTML("afterbegin", "<li>Список удален</li>");
//     }
    
//     else {
//         li.remove();
//     }
// }, 500);

// let spans = document.querySelectorAll(".remove-button");

// for(let i = 0; i < spans.length; i++){
//     spans[i].addEventListener("click", function(){
//         this.parentNode.remove();
//     });
// }

// let div = document.querySelector("div");
// div.className = 'alert';
// let activeDiv = document.querySelector(".active");
// // activeDiv.className = "hidden";
// activeDiv.classList.add('hidden');
// activeDiv.classList.remove('hidden');

// activeDiv.classList.toggle('hidden');
// activeDiv.classList.replace('active', 'alert');

// let sunRise = document.querySelector("#sunrise");

// sunRise.title = "Новый текст подсказки";
// console.log(sunRise.getAttribute('src'));
// sunRise.setAttribute('src', '4.jpg');
// sunRise.removeAttribute('src');
// console.log(sunRise.hasAttribute('src'));

// document.form1.style.background = "silver";

// document.forms[0].style.padding = "16px";
// document.forms.form1.style.border = "2px dotted gray";

// document.form1.name1.style.color = "blue";

// let txt = document.querySelector("#text1");
// let but = document.querySelector("button");

// but.addEventListener("click", content);

// function content(){
//     alert(txt.value);
// }

let choose = document.querySelector("input[type='button']");

choose.addEventListener("click", chooseColor);

function chooseColor(){
    document.body.style.background = document.form3.radio2.value;
    
}