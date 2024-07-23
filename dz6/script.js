function Info(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.who = function(){
        document.write("Я " + this.name + " мне " + age + " лет. Я работаю " + this.job + ". <br>")
    }
}

let per1 = new Info("Дмитрий", 26, "Дизайнером");
let per2 = new Info("Станислав", 29, "Программистом");
let per3 = new Info("Сергей", 35, "Менеджером");
per1.who();
per2.who();
per3.who();