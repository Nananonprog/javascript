let form = document.form1;
form.addEventListener("submit", event => {
    event.preventDefault();

    let title = form.title.value;
    let text = form.text.value;
    let description = form.description.value;
    saveForm({title, text});
})

function saveForm(data){
    let formData = {
        date: new Date().toLocaleDateString(),
        title:data.title,
        text:data.text
        
    }
}