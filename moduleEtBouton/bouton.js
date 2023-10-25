let neonBoutons = document.querySelectorAll('.neonButton')


function initial_neon_buton(neonBouton, neonColor) {
    neonBouton.style.color = neonColor
    neonBouton.style.backgroundColor = 'transparent'
    neonBouton.style.filter = ('drop-shadow(0px 0px 15px ' + neonColor + ') drop-shadow(0px 0px 50px ' + neonColor + ') brightness(1.5)')
    neonBouton.style.border = neonColor + ' 4px solid'
}

neonBoutons.forEach(neonBouton => {
    const neonColor = neonBouton.classList[1]
    initial_neon_buton(neonBouton, neonColor)
    neonBouton.addEventListener('mouseout', () => {initial_neon_buton(neonBouton, neonColor)})
    neonBouton.addEventListener('mouseover', () => {
        neonBouton.style.neonColor = 'black'
        neonBouton.style.backgroundColor = neonColor
        neonBouton.style.filter = ('drop-shadow(0px 0px 20px' + neonColor + ') brightness(3)')
    })

})

for (let i = 0 ; i < 65 ; i++){
    let div_boutons = document.getElementById('bouton')
    let text = "Button Style"+i
    if ([0].includes(i)){
        text = "<span> Button Style"+i+"</span>"
    }
    div_boutons.innerHTML += ("<button type='button' class=' boutonStyle styleButton"+i+"'>"+text+" </button>")

}

let boutonSpecial = document.querySelector('.buttonSpecial')

let largeur = document.getElementById("largeur")
let hauteur = document.getElementById('hauteur')
let textsize = document.getElementById('text-size')
let textcolor = document.getElementById('text-color')

console.log(largeur.value,hauteur.value,textsize.value,textcolor.value)



largeur.addEventListener('input',()=>{
    boutonSpecial.style.width = largeur.value*5 + 'px'
})
hauteur.addEventListener('input',()=>{
    boutonSpecial.style.height = hauteur.value*5 + 'px'
})
textsize.addEventListener('input',()=>{
    boutonSpecial.style.fontSize = textsize.value + 'px'
})
textcolor.addEventListener('input',()=>{
    boutonSpecial.style.color = textcolor.value
})



