let fond = document.querySelector('.fond')


let i = 1;

function add_login_container() {
    fond.innerHTML += `
        <div class=' login-container d-flex flex-row justify-content-between flex-wrap' data-aos='zoom-in-right' >
            <div class="login-code-space login-code-space"></div>
            <div class="login-space login-space-${i}"></div>
            <div class="login-name-space login-name-space"></div>
        </div>
    `;
    i++;
}
