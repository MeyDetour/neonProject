

document.querySelectorAll('.settings-option').forEach((option)=>{ option.addEventListener('click',()=>{ document.querySelector('.setting-container-menu').style.height = document.getElementById(option.getAttribute('href').substring(1)).offsetHeight + 'px' })})

fetch("https://api.github.com/users/MeyDetour#")
.then(response => response.json())
.then(data =>{

})