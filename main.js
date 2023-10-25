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


