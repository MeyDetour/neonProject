
let page1Bouton = document.querySelector('.icone-next')
let page2= document.querySelector('.page2')
let page1 = document.querySelector('.page1')

page1Bouton.addEventListener('click',()=>{
    page2.style.width = '70%'
    page2.style.transform = 'translateX(-72%)'
    page2.style.transition= '1s'
    page1.style.transform = 'translateX(-100%)'
})

const textElement = document.getElementById('text');
const cursorElement = document.getElementById('cursor');

textElement.addEventListener('animationend', () => {
    cursorElement.style.display = 'none';
});