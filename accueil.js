let burger = document.querySelector('.boutonburger')
let nav2 = document.querySelector('.nav2')
const fond = document.querySelector('.fond')


burger.addEventListener('click', () => {
        console.log('reouvrir')

        nav2.classList.add('in')
        nav2.style.width = '100%'
        burger.style.display = 'none'
    }
)

fond.addEventListener('click', () => {
    console.log('not contain in')
    if (nav2.classList.contains('in')) {
        console.log('remove et add')
        nav2.classList.remove('in')
        nav2.classList.add('out')
        burger.style.display = 'block'
        setTimeout(() => {
            nav2.classList.remove('out')
        }, 2000)

    }
})


let temps = 1500

function neonbar_entrance(nb) {
    if (nb <= 8) {
        let barre = document.querySelector('.index-neonbar' + nb)
        barre.style.left = Math.random()*75 + '%'
        barre.style.top = 10 + Math.random()*85 + '%'
        barre.classList.remove('exit-left')
        barre.style.display = 'block'

        //temps avant que les autres bqrres apparaissent
        setTimeout(() => {
            neonbar_entrance(nb + 1)
        }, 500)

    } else {
        neonbar_out(1)

    }

}

function neonbar_out(nb) {
    if (nb <= 8) {
        let barre = document.querySelector('.index-neonbar' + nb)
        barre.classList.add('exit-left')

        setTimeout(() => {

            neonbar_out(nb + 1)
        }, 500)

    }
}


setInterval(() => {
    console.log('deb')
    neonbar_entrance(1)
    console.log('fin')
}, temps)


