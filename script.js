const menu = document.querySelector(".openmenu");
const list = document.querySelector(".list");

menu.addEventListener("click", ()=>{
    list.classList.toggle("open")
})