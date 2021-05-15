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

// IMAGE - EVENTS

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

//Image Filters 
const shineFilter = document.getElementById("brightness-form")
const opacityFilter = document.getElementById("opacity-form")     
const contrastFilter = document.getElementById("contrast-form")
const blurFilter = document.getElementById("blur-form") 
const scaleFilter = document.getElementById("scale-form")
const sepiaFilter = document.getElementById("sepia-form")
const hueFilter = document.getElementById("hue-form")
const saturatedFilter = document.getElementById("saturated-form") 
const negativeFilter = document.getElementById("negative-form")

const filters = () => {
    const shine = shineFilter.value
    const opacity = opacityFilter.value
    const contrast = contrastFilter.value
    const blur = blurFilter.value
    const scale = scaleFilter.value
    const sepia = sepiaFilter.value
    const hue = hueFilter.value
    const saturate = saturatedFilter.value
    const negative = negativeFilter.value
  
    imageMeme.style.filter = `brightness(${shine}) grayscale(${scale}%) opacity(${opacity}) contrast(${contrast}%) blur(${blur}px) sepia(${sepia}%) hue-rotate(${hue}deg) saturate(${saturate}%) invert(${negative})`;
    console.log(imageMeme);
}

shineFilter.addEventListener("change", filters)
opacityFilter.addEventListener("change", filters)
contrastFilter.addEventListener("change", filters)
blurFilter.addEventListener("change", filters)
scaleFilter.addEventListener("change", filters)
sepiaFilter.addEventListener("change", filters)
hueFilter.addEventListener("change", filters)
saturatedFilter.addEventListener("change", filters)
negativeFilter.addEventListener("change", filters)

// Reset Button Filters

const resetFiltersBtn = document.getElementById('reset-filters-button');

const resetFilters = (event) => {
    shineFilter.value = 1;
    opacityFilter.value = 1;
    contrastFilter.value = 1;
    blurFilter.value = 0;
    scaleFilter.value = 0;
    sepiaFilter.value = 0;
    hueFilter.value = 0;
    saturatedFilter.value = 100;
    negativeFilter.value = 0;
    
    filters();
}

resetFiltersBtn.addEventListener('click', resetFilters);

// TEXT - EVENTS

// MEME top text
const addTopTextMeme = document.getElementById('input-meme-top-text');
const topTextMeme = document.getElementById('meme-top-text');

addTopTextMeme.addEventListener('change', () => {
    topTextMeme.innerText = addTopTextMeme.value;
})

// Button check - no show top text
const showTopText = document.getElementById('no-show-top-text-check');

showTopText.addEventListener('click', () => {
    if(showTopText.checked){
        topTextMeme.style.display = 'none';
    } else{
        topTextMeme.style.display = 'block';
    } 
})

// MEME bottom text
const addBottomTextMeme = document.getElementById('input-meme-bottom-text');
const bottomTextMeme = document.getElementById('meme-bottom-text');

addBottomTextMeme.addEventListener('change', () => {
    bottomTextMeme.innerText = addBottomTextMeme.value;
})

// Button check - no show bottom text
const showBottomText = document.getElementById('no-show-bottom-text-check');

showBottomText.addEventListener('click', () => {
    if(showBottomText.checked){
        bottomTextMeme.style.display = 'none';
    } else{
        bottomTextMeme.style.display = 'block';
    } 
})

// MEME Font Family

const fontFamilyMeme = document.getElementById('font-family-select');
const textsMeme = document.getElementsByClassName('text-meme');

fontFamilyMeme.addEventListener('click', () => {
    topTextMeme.style.fontFamily = fontFamilyMeme.value;
    bottomTextMeme.style.fontFamily = fontFamilyMeme.value;
})