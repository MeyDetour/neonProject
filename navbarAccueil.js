let navbar = document.querySelector('.navbarMain')


navbar.innerHTML = ` 
    <div class='nav2'>
        <a href='module.html' class='lien'>Module</a>
        <a href='bouton.html' class='lien'>Bouton</a>
        <a href='navbar.html' class='lien'>Navbar</a>
        <a href='animation.html' class='lien'>Animation</a>
        <a href='loginform.html' class='lien'>Login Form</a>
        <a href='' class='lien'>Menu</a>
        <a href='' class='lien'>Menu</a>
        <a href='' class='lien'>Menu</a>
    </div>
    <div class='nav1'>
        <i class='bi bi-list boutonburger'></i>
         <h1 id='neon'>Neon</h1>
         <div class="icone-right-navbar-container">
            <div class="icone-right-navbar">
                <div onclick="dire()"><i class="iconenavbar bi bi-plus-square-fill"></i></div>
                <div onclick="dire()"><i class="iconenavbar bi bi-bricks repository"></i></div>
                <div onclick="dire()"><i class="iconenavbar bi bi-people liste-ami"></i></div>
                <div onclick="dire()" class="imagepdp"></div>
            </div>
    </div>
    </div>
`;


function redirect() {
    window.location.href = 'accueil.html'
}

function dire() {
    console.log('click')
}

let imagepdp = document.querySelector('.imagepdp')
let nav1 = document.querySelector('.nav1')
let iconesNavbar = document.querySelectorAll('.iconenavbar')
let iconeRightNavbarcontainer = document.querySelector('.icone-right-navbar-container')


iconeRightNavbarcontainer.addEventListener('mouseover', () => {
    console.log('over')
    nav1.classList.add('ouvert-nav1');
    iconesNavbar.forEach((icone) => {
        icone.style.display = 'block'
        icone.addEventListener('mouseover',()=>{
            icone.classList.add('survol')
        })

    })


})

iconeRightNavbarcontainer.addEventListener('mouseout', () => {
    console.log('out')
    nav1.classList.remove('ouvert-nav1');
    iconesNavbar.forEach((icone) => {
        icone.classList.remove('survol')
    })
});