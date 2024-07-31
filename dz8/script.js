document.querySelector("#load").addEventListener("click", load);
function load(){
    let url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let ul = document.querySelector("#list");
            let html = data.map(function(item){
                if(item.completed){
                return "<li>" + "Пользователь: " +  item.userId + " выполнил задачу № " + item.id + " (" + item.title + ")" +  "</li>";}
                

            })
            ul.insertAdjacentHTML("afterbegin", html.join(" "));
        })

}
// return "<li>" + "Пользователь :" + item.userId + "выполнил задачу № " + item.id + " (" + item.title + ")" + "</li>";
