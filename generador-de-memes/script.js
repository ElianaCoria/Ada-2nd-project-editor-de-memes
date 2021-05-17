// Change Theme
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

// Show Image and Text panel
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

// IMAGE panel - EVENTS

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

// TEXT panel - EVENTS

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

fontFamilyMeme.addEventListener('click', () => {
    topTextMeme.style.fontFamily = fontFamilyMeme.value;
    bottomTextMeme.style.fontFamily = fontFamilyMeme.value;
})

// MEME Font size

const fontSizeMeme = document.getElementById('font-size-input');

fontSizeMeme.addEventListener('input', () => {
    const size = fontSizeMeme.value;
    
    topTextMeme.style.fontSize = `${size}px`;
    bottomTextMeme.style.fontSize = `${size}px`;
})

// MEME aling text

const alignBtns = document.getElementsByClassName('align-text-button');

const alignment = (event) => {

    const chosenAlignment = event.target.value;

    switch (chosenAlignment) {
        case 'left-align':
            topTextMeme.style.textAlign = 'left';
            bottomTextMeme.style.textAlign = 'left';
            break;
        case 'center-align':
            topTextMeme.style.textAlign = 'center';
            bottomTextMeme.style.textAlign = 'center';
            break
        case 'right-align':
            topTextMeme.style.textAlign = 'right';
            bottomTextMeme.style.textAlign = 'right';
            break
    }
}

for (const alignBtn of alignBtns){
    alignBtn.addEventListener('click', alignment)
}

// MEME color font

const colorTextMeme = document.getElementById('meme-text-color-input');
const colorHexText = document.getElementById('color-hex-text');

colorTextMeme.addEventListener('input', () => {
    topTextMeme.style.color = colorTextMeme.value;
    bottomTextMeme.style.color = colorTextMeme.value;
    colorHexText.innerText = colorTextMeme.value;
})

// MEME backgroundcolor text

const backgroundcolorTextMeme = document.getElementById('meme-text-backgroundcolor-input');
const backgroundcolorHexText = document.getElementById('backgroundcolor-hex-text'); 

backgroundcolorTextMeme.addEventListener('input', () => {
    topTextMeme.style.backgroundColor = backgroundcolorTextMeme.value;
    bottomTextMeme.style.backgroundColor = backgroundcolorTextMeme.value;
    backgroundcolorHexText.innerText = backgroundcolorTextMeme.value;
})

// Button check - no show backgorund text

const showBackgroundText = document.getElementById('text-backgroundcolor-check');

showBackgroundText.addEventListener('click', () => {
    if(showBackgroundText.checked){
        topTextMeme.style.backgroundColor = 'transparent'
        bottomTextMeme.style.backgroundColor = 'transparent';
    } else{
        topTextMeme.style.backgroundColor = 'white';
        bottomTextMeme.style.backgroundColor = 'white';
    } 
})

// MEME Contour Text

const outlineButtons = document.getElementsByClassName('text-outline');

const outlineText = (event) => {
    const choosenOutline = event.target.value;

    switch (choosenOutline) {
        case 'outline-none':
            topTextMeme.style = `text-shadow: none`;
            bottomTextMeme.style = `text-shadow: none`;

            topTextMeme.style.color = colorTextMeme.value;
            bottomTextMeme.style.color = colorTextMeme.value;
            colorHexText.innerText = colorTextMeme.value;

            topTextMeme.style.backgroundColor = backgroundcolorTextMeme.value;
            bottomTextMeme.style.backgroundColor = backgroundcolorTextMeme.value;
            backgroundcolorHexText.innerText = backgroundcolorTextMeme.value;
        break;
        case 'outline-light':
            topTextMeme.style = `text-shadow: 1px  0px 0px white,
            0px  1px 0px white,
           -1px  0px 0px white,
            0px -1px 0px white;`;
            bottomTextMeme.style = `text-shadow: 1px  0px 0px white,
            0px  1px 0px white,
           -1px  0px 0px white,
            0px -1px 0px white;`;

            topTextMeme.style.color = colorTextMeme.value;
            bottomTextMeme.style.color = colorTextMeme.value;
            colorHexText.innerText = colorTextMeme.value;

            topTextMeme.style.backgroundColor = backgroundcolorTextMeme.value;
            bottomTextMeme.style.backgroundColor = backgroundcolorTextMeme.value;
            backgroundcolorHexText.innerText = backgroundcolorTextMeme.value;
        break;
        case 'outline-dark':
            topTextMeme.style= `text-shadow: 1px  0px 0px black,
            0px  1px 0px black,
           -1px  0px 0px black,
            0px -1px 0px black;`;
        
            bottomTextMeme.style= `text-shadow: 1px  0px 0px black,
            0px  1px 0px black,
           -1px  0px 0px black,
            0px -1px 0px black;`;
            
            topTextMeme.style.color = colorTextMeme.value;
            bottomTextMeme.style.color = colorTextMeme.value;
            colorHexText.innerText = colorTextMeme.value;

            topTextMeme.style.backgroundColor = backgroundcolorTextMeme.value;
            bottomTextMeme.style.backgroundColor = backgroundcolorTextMeme.value;
            backgroundcolorHexText.innerText = backgroundcolorTextMeme.value;
        break;
    }
}

for(const outlineBtn of outlineButtons){
    outlineBtn.addEventListener('click', outlineText);
    console.log(outlineText);
}

// MEME Spacing Text

const spacingText = document.getElementById('spacing-text');

spacingText.addEventListener('input', () => {
    const spacing = spacingText.value;

    topTextMeme.style.letterSpacing = `${spacing}px`;
    bottomTextMeme.style.letterSpacing = `${spacing}px`;
})

// MEME line-Spacing Text

const lineSpacingText = document.getElementById('line-spacing-text');

lineSpacingText.addEventListener('click', () => {
    topTextMeme.style.lineHeight = lineSpacingText.value;
    bottomTextMeme.style.lineHeight = lineSpacingText.value;
})