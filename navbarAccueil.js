let navbar = document.querySelector('.navbarMain')

navbar.innerHTML = ` 
    <div class='nav2'>
        <a href='html/module.html' class='lien'>Module</a>
        <a href='html/bouton.html' class='lien'>Bouton</a>
        <a href='html/navbar.html' class='lien'>Navbar</a>
        <a href='html/animation.html' class='lien'>Animation</a>
        <a href='' class='lien'>Menu</a>
        <a href='' class='lien'>Menu</a>
        <a href='' class='lien'>Menu</a>
        <a href='' class='lien'>Menu</a>
    </div>
    <div class='nav1'>
        <i class='bi bi-list boutonburger'></i>
         <h1 id='neon'>Neon</h1>
        <div class='icone-right-navbar'>
       
        <div onclick='dire()' ><i class='bi bi-plus-square-fill'></i></div>
        <div onclick='dire()' ><i class='bi bi-bricks repository'></i></div>
        <div onclick='dire()' ><i class='bi bi-people liste-ami' ></i></div>
        <div onclick='dire()' class='imagepdp'></div>
        </div>
    </div>
`;


function redirect() {
    window.location.href = 'accueil.html'
}

function dire() {
    console.log('click')
}