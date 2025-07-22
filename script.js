const text = "Bolt";
const input = document.getElementById("MyInput");
let index = 0;

function typeEffect(){
    if(index < text.length){
        input.value += text.charAt(index);
        index++;
        setTimeout(typeEffect,200)
    }
}
window.addEventListener("DOMContentLoaded",typeEffect)