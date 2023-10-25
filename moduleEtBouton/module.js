let cartes = document.querySelectorAll('.carte');

cartes.forEach(carte => {

    carte.addEventListener('click', () => {
        if ( carte.innerHTML === ''){
        carte.innerHTML = ("<div class='description'></div>")}
        else{
            carte.innerHTML = ''
        }
    });
    carte.addEventListener('mouseover', () => {
            carte.style.filter = 'grayscale(70%)'
            carte.innerHTML = ("<div class='description'></div>")
    });
    carte.addEventListener('mouseout', () => {
            carte.innerHTML = ''
        carte.style.filter = 'grayscale(0%)'
    });
});


