

document.querySelectorAll('.settings-option').forEach((option)=>{ option.addEventListener('click',()=>{ document.querySelector('.setting-container-menu').style.height = document.getElementById(option.getAttribute('href').substring(1)).offsetHeight + 'px' })})

fetch("https://api.github.com/users/MeyDetour")
.then(response => response.json())
.then(data =>{
    console.log(data)
    document.querySelector('.profil-modifier-nom').innerHTML = `
        <h1>${data['name']}</h1> 
        <h6 class="tx-timide">${data['login']}</h6>
    `
    document.getElementById('Porfilbio').value = data['bio']
})







let imadepdp = document.querySelector('.imagepdp-Settingsprofil')
imadepdp.addEventListener('mouseover',()=>{
    imadepdp.classList.toggle('hover-grayscale')
    imadepdp.innerHTML = `<input type="file" name="imgpdp" id="imgpdp" class="inputfile" />
<label for="imgpdp" class="bi bi-pencil-fill tx-grincheux fs-1"></label>
        `
})
imadepdp.addEventListener('mouseout',()=>{
    imadepdp.classList.toggle('hover-grayscale')
    imadepdp.innerHTML = ''
})
