let temps = 1500

function neonbar_entrance(nb) {
    if (nb  <= 4) {
        let barre = document.querySelector('.index-neonbar' + nb)
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
    if (nb <= 4) {
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
}, 3500)



function redirect(){
    window.location.href = 'accueil.html'
}

