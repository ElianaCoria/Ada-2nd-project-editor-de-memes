const buttonToChangeTheme = document.getElementById('dark-light-theme-btn');

const textThemeBtn = document.getElementById('theme-button-text');

buttonToChangeTheme.addEventListener('click', () =>{
    if(document.body.className == 'dark-theme'){
        document.body.className = 'light-theme';
        textThemeBtn.innerText = 'Modo oscuro'; 
    } else{
        document.body.className = 'dark-theme';
        textThemeBtn.innerText = ' Modo claro'; 
    }
})

