const slides = document.querySelectorAll('.slide');
for(let i = 0; i < slides.length; i++){
    slides[i].addEventListener("click", ()=>{
        clearActiveClasses();
        slides[i].classList.add("active");
    })
}

function clearActiveClasses(){
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove("active");
    }
}