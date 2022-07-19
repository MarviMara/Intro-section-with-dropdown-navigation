const iconDown=document.getElementById('arrow-down')
const navLink=document.querySelector('.hovered')
const icondownV2=document.getElementById('arrow-down-one')
const navLink1=document.querySelector('.hovered-one')

const closeMenuButton=document.querySelector('.close-button')
const openMenubutton=document.querySelector('.icon-menu')
const mobileMenu=document.querySelector('.mobile-menu')


const firstLinks=document.getElementById('first-links')
const secondLinks=document.getElementById('second-links')

const firstFeature=document.getElementById('first-feature')
const secondFeature=document.getElementById('second-feature')



firstFeature.addEventListener('click',()=>{
 firstLinks.classList.toggle('open-mobile-links')
 firstLinks.style.display='flex';
  if (firstLinks.style.display='flex' && !firstLinks.classList.contains('open-mobile-links')) {
      firstLinks.style.display='none'
  }
  
})


secondFeature.addEventListener('click',()=>{
  secondLinks.classList.toggle('open-mobile-links')
  secondLinks.style.display='flex';
  if (secondLinks.style.display='flex' && !secondLinks.classList.contains('open-mobile-links')) {
      secondLinks.style.display='none'
  }
})





closeMenuButton.addEventListener('click',function(){
  console.log('clicked close menu')
  mobileMenu.classList.remove('enter-mobile-menu')
  mobileMenu.classList.add('leave-mobile-menu')
 
  
})
openMenubutton.addEventListener('click',function(){
  mobileMenu.classList.remove('leave-mobile-menu')
  mobileMenu.classList.add('enter-mobile-menu')
 
})



navLink.onmouseover=function(){
  iconDown.style.display='none';
}
 navLink.onmouseleave=function(){
  iconDown.style.display='block'  
}

navLink1.onmouseover=function(){
  icondownV2.style.display='none';
}
 navLink1.onmouseleave=function(){
  icondownV2.style.display='block'  
}




