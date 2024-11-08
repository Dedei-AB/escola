// Capturar os elementos que terão interação em tela

const menuIcon = document.querySelector("#menuIcon")
const closeIcon = document.querySelector("#closeIcon")
const sidebar = document.querySelector("#sidebar")
const conteudo = document.querySelector(".conteudo")

// Definir qual interação (evento) o elemento terá
sidebar.style.display = 'none'
closeIcon.style.display = 'none'

menuIcon.addEventListener("click", showSidebar)
closeIcon.addEventListener("click", hideSidebar)


// Definir o que será feito quando a interação (evento) ocorrer

function showSidebar(){
    // sidebar.style.display = "flex"    
    sidebar.style.display = 'flex'
    conteudo.style.display = 'none'
    menuIcon.style.display = 'none'
    closeIcon.style.display = 'flex'
}

function hideSidebar(){
    // sidebar.style.display = "none"    
    sidebar.style.display = 'none'
    conteudo.style.display = 'flex'
    closeIcon.style.display = 'none'
    menuIcon.style.display = 'flex'
}