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
img.setAttribute('src', './assets/avatar-lightmode.png')
img.setAttribute('alt','Imagem de fundo com homem fone de ouvido branco sorrindo')
}else{
img.setAttribute('src','./assets/avatar1.png')
img.setAttribute('alt','Imagem de fundo de uma praça ilumindada de noite com homem olhando para o lado')
}
//how I changed the avatar img

}