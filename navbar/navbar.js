let fond = document.querySelector('.fond')
let plus = document.querySelector('.add-navbar-file')

let i = 1;

function add_navbar_container() {
    console.log('add container')
    fond.innerHTML += `
    <div class="navbar-container">
        <div class="navbar-space"><div class="navbarDesign navbar${i}"></div></div>
        <div class="navbar-description"></div>
    </div>
    `;

    i++; // Incrémentez i pour avoir une classe différente à chaque appel
}


