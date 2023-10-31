let page1Bouton = document.querySelector('.icone-next')
let page2 = document.querySelector('.page2')
let page1 = document.querySelector('.page1')
const textArray = ['Bienvenue sur notre plateforme créative !', 'Ici, chaque utilisateur est une star de la créativité. Vous avez un compte personnel pour partager vos projets, vos idées, et interagir avec une communauté passionnée. ',
    'Publiez vos créations, recevez des retours et améliorez-les grâce à la fonction "ReDo" qui vous permet de collaborer et de perfectionner ensemble.',
    ' Notre site encourage le partage public, car nous croyons en l\'inspiration collective. Explorez un monde de possibilités, personnalisez votre profil et découvrez une révolution de la créativité où l\'enthousiasme est le moteur principal. Rejoignez-nous pour créer, collaborer et vous épanouir ! 🚀🎨✨']


page1Bouton.addEventListener('click', () => {
    page2.style.width = '70%'
    page2.style.transform = 'translateX(-72%)'
    page2.style.transition = '1s'
    page1.style.transition = '1s'
    page1.style.transform = 'translateX(-100%)'

    textArray.forEach((parag)=>{
        textSPace.innerHTML += parag
        textSPace.innerHTML += '<br><br>'
    })

})

let textSPace = document.getElementById('text');

