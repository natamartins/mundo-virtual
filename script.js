
/* animacao scroll online*/ 
window.rs = ScrollReveal({reset: true})
rs.reveal ('.virtual', {duration: 2000})
rs.reveal ('.box-Movies', {duration: 4000} )

/* menu anburgue */ 
const menu = document.getElementById('menu-js')
const navList = document.getElementById('nav-js')

function ativar(){
 navList.classList.toggle('ativo')
}

menu.addEventListener('click',ativar)