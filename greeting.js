const formContainer = document.querySelector('.js-form'),
      formInput = formContainer.querySelector('input'),
      greetingContainer = document.querySelector('.js-greeting');

const USER_LS = "currentUser";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = formInput.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    formContainer.classList.add('showing');
    formContainer.addEventListener('submit', handleSubmit)
}

function paintGreeting(text){
    formContainer.classList.remove('showing');
    greetingContainer.classList.add('showing');
    greetingContainer.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser =  localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();