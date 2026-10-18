function text(selector, text){
    if (text){
        document.querySelector(selector).textContent = text;
    }
    else{
        return document.querySelector(selector).textContent;
    }
}

function addClass(selector, className){
    document.querySelector(selector).classList.add(className);
}