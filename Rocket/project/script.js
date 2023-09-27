function toggleMode(){
const body = document.documentElement
body.classList.toggle("light")

// how a toggle works 
// if (body.classList.contains('light')){
//     body.classList.remove("light")    
// } else{
//     body.classList.add("light")
// }
const img = document.querySelector("#profile img")
if (body.classList.contains('light')){
img.setAttribute('src', './assets/avatar-light.png')
img.setAttribute('alt','Imagem de fundo azul com homem de óculos escuro sorrindo')
}else{
img.setAttribute('src','./assets/avatar.png')
img.setAttribute('alt','Imagem de fundo amarelo com homem sorrindo')
}
//how I changed the avatar img

}