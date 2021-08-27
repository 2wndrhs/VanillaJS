const title = document.querySelector('#title');
const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    
    // console.log(hasClass);
    
    // if(hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    // }
    
    // else{
    //     title.classList.add(CLICKED_CLASS);        
    // }
}

function init(){
    title.addEventListener("click", handleClick);
}

init();


