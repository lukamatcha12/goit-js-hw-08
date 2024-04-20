import throttle from "lodash.throttle";

let form=document.querySelector('form.feedback-form');
let emailEl=document.querySelector('label [name = "email"]');
let mesageEl= document.querySelector('label [name="message"]');

const STORAGE_KEY ='feddback-form-state';

function onPageReload() {
    const savedMessage= JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(savedMessage){
        emailEl.value=savedMessage.email;
        mesageEl.value=savedMessage.message;

    }
}

onPageReload()

form.addEventListener('input', throttle(onFormInput,500));

function onFormInput(){
    const email =emailEl.value;
    const message = mesageEl.value;

    const formData={
        email,
        message,
    };
    localStorage.setItem(STORAGE_KEY,JSON.stringify(formData));
}

function onFormSubmit(e){
e.preventDefault();
const email =emailEl.value;
    const message = mesageEl.value;

    if (email =="" || message ==""){
        alert('Please fill up both fields');
        form.reset();
        return;
    }
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
}
document.addEventListener('submit', onFormSubmit);
