let incremnt=document.querySelector('.incremnt');
let decremnt=document.querySelector('.decremnt');
let result=document.querySelector('.result');



incremnt.addEventListener('click',()=>{
    let value=parseInt(result.innerText);
    value++;
    result.innerText=value
});

decremnt.addEventListener('click',()=>{
    let value=parseInt(result.innerText);
    value--;
    result.innerText=value
});