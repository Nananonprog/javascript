let imgTime =["c0.gif", "c1.gif", "img/c2.gif", "c3.gif", "c4.gif", "c5.gif", "c6.gif", "c7.gif", "c8.gif", "c9.gif"];

let t = document.querySelector("#clock img");

clock();

function clock(){
    let time = new Date();
    let hour = time.getHours;
    let min = time.getMinutes;
    let sec = time.getSeconds;
    console.log(hour, min, sec);
    setTimeout(clock, 1000);
}

function getImg(h, m, s){
    t[0].src = imgTime[parseInt(h/10)];
    t[1].src = imgTime[h%10];

    

}