let navbar = document.querySelector('.navbarMain')


navbar.innerHTML = ` 
 
 
    <div class='nav2 out'>
        <div class="nav2link">
            <a href='module.html' class='lien'>Module</a>
            <a href='bouton.html' class='lien'>Bouton</a>
            <a href='navbar.html' class='lien'>Navbar</a>
            <a href='animation.html' class='lien'>Animation</a>
            <a href='loginform.html' class='lien'>LoginForm</a>
            <a href='' class='lien'>Menu</a>
            <a href='' class='lien'>Menu</a>
            <a href='' class='lien'>Menu</a>
        </div>
  
    </div>
    <div class='nav1'>
        <i class='bi bi-list boutonburger'></i>
         <a href="accueil.html" id="neon">Neon</a>
           <div class="icone-right-navbar-container-nav1">
                <div class="icone-right-navbar1">
                <div onclick="create_files()"><i class="iconenavbar bi bi-plus-square-fill"></i></div>
                <div onclick="project()"><i class="iconenavbar bi bi-bricks repository"></i></div>
                <div onclick="friends()"><i class="iconenavbar bi bi-people liste-ami"></i></div>
                 <div onclick="settings()"><i class="iconenavbar bi bi-gear settings"></i></div>
                <div  class="imagepdp"></div>
                </div>
           </div>
        
    </div>
 <div onclick="dire()" class="imagepdp imagepdpDropdown"></div>
      <div class="dropdownmenu">
        <ul>
          <li class="eltDropdown"><a href=""><i class="iconeDropdown bi bi-plus-square-fill"></i></a></li>
          <li class="eltDropdown"><a href=""><i class="iconeDropdown bi bi-bricks repository"></i></a></li>
          <li class="eltDropdown"><a href=""><i class="iconeDropdown bi bi-people liste-ami"></i></a></li>
          <li class="eltDropdown"><a href=""><i class="iconeDropdown bi bi-gear"></i></a></li>
        </ul>
      </div>
`;
function create_files(){

}
function project(){

}
function friends(){

}
function settings(){

}




let burger = document.querySelector('.boutonburger')
let nav2 = document.querySelector('.nav2')
const fond = document.querySelector('.fond')
let imagedropdown = document.querySelector('.imagepdpDropdown')
let dropmenu = document.querySelector('.dropdownmenu')

function fermer_nav2() {
    if (nav2.classList.contains('in')) {
        nav2.classList.toggle('in')
        nav2.classList.toggle('out')
    }
}

function fermer_dropdown() {
    if (dropmenu.classList.contains('display-block')) {
        dropmenu.classList.remove('display-block')
    }
}

fond.addEventListener('click', fermer_dropdown)


imagedropdown.addEventListener('click', () => {
    fermer_nav2()
    dropmenu.classList.toggle('display-block')

})

window.addEventListener('resize', () => {
    fermer_nav2()
})
burger.addEventListener('click', () => {
    fermer_dropdown()
    console.log('reouvrir')
    nav2.classList.toggle('in')
    nav2.classList.toggle('out')

    if (nav2.classList.contains('in')) {
        fond.style.display = 'none'
    }
    else{
        fond.style.display = 'block'

}}
)


    function dire() {
        console.log('click')
    }

    let imagepdp = document.querySelector('.imagepdp')
    let nav1 = document.querySelector('.nav1')
    let iconesNavbar = document.querySelectorAll('.iconenavbar')
    let iconeRightNavbarcontainer = document.querySelector('.icone-right-navbar-container-nav1')


    iconeRightNavbarcontainer.addEventListener('mouseover', () => {
        console.log('over')
        nav1.classList.add('ouvert-nav1');
        iconesNavbar.forEach((icone) => {
            icone.style.display = 'block'
            icone.addEventListener('mouseover', () => {
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
