const menuIcone = document.getElementById("menu-icone")
const navMenu = document.getElementById("nav-menu")
menuIcone.addEventListener('click', ()=>{
    navMenu.classList.toggle("active")
    menuIcone.classList.toggle("open")
})