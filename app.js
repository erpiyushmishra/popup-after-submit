const mainButton=document.querySelector(".main_button")
const popUp=document.querySelector(".popup")
const secondaryButton=document.querySelector(".inside_button")
mainButton.addEventListener('click',popupOpen)
secondaryButton.addEventListener('click',popupClose)



function popupOpen(){
    popUp.classList.add("open-popup")
    
}
function popupClose(){
    popUp.classList.remove("open-popup")
}