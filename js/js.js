import { getAxiosData } from "./axios.js";
const cardsParent = document.querySelector(".container");
getAxiosData(cardsParent)
// console.log(cardsParent);\
let docTitle = document.title;
window.addEventListener("blur",()=>{
    document.title="come back ;("
});
window.addEventListener("focus",()=>{
    document.title="Harry Potter"
});
window.onload = () => document.querySelector('header').classList.remove('hidden');


