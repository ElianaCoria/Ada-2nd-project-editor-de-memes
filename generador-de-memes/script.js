// Change Theme
const buttonToChangeTheme = document.getElementById('dark-light-theme-btn');

const textThemeBtn = document.getElementById('theme-button-text');

buttonToChangeTheme.addEventListener('click', () =>{
    if(document.body.className == 'dark-theme'){
        document.body.className = 'light-theme';
        textThemeBtn.innerText = 'Modo claro'; 
    } else{
        document.body.className = 'dark-theme';
        textThemeBtn.innerText = ' Modo oscuro'; 
    }
})

// Show Image - Text panel
const imagePanelControlBtn = document.getElementById('image-panel-control-btn');
const textPanelControlBtn = document.getElementById('text-panel-control-btn');
const editPanelAside = document.getElementById('edit-panel');
const imagePanelEditor = document.getElementById('image-editor-panel');
const textPanelEditor = document.getElementById('text-editor-panel')

imagePanelControlBtn.addEventListener('click', () => {
    editPanelAside.style.right = '0';
    imagePanelEditor.style.display = 'block';
    textPanelEditor.style.display = 'none';
})

textPanelControlBtn.addEventListener('click', () => {
    editPanelAside.style.right = '0';
    textPanelEditor.style.display = 'block';
    imagePanelEditor.style.display = 'none';
})

// Close Panel Control (aside)
const closePanelBtn = document.getElementById('close-panel-btn');

closePanelBtn.addEventListener('click', () => {
    editPanelAside.style.right = '-270px';
})

// URL form (add image)
const addUrlInput = document.getElementById('form-url');
const imageMeme = document.getElementById('image-meme');

addUrlInput.addEventListener('change', () => {
    imageMeme.style = `background-image: url(${addUrlInput.value})`;
})

// Background-color - setting Image
const backgroundColorImgInput = document.getElementById('background-color-image-input');
const colorHexImage = document.getElementById('color-hex-image');

backgroundColorImgInput.addEventListener('input', () => {
    imageMeme.style.backgroundColor = backgroundColorImgInput.value;
    colorHexImage.innerText = backgroundColorImgInput.value;
})

const colorImageSetting = document.getElementById('background-color-image-setting');

colorImageSetting.addEventListener('change', () => {
    imageMeme.style.backgroundBlendMode = colorImageSetting.value;
})

