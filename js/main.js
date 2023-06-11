let modelS = document.querySelector('.model-s')
let model3 = document.querySelector('.model-3')
let modelX = document.querySelector('.model-x')
let modelY = document.querySelector('.model-y')
let roof = document.querySelector('.roof')
let panels = document.querySelector('.panel')
let powerwall = document.querySelector('.powerwall')
let backgroundImage = document.querySelector('.bg-image-container')
let title = document.querySelector('.title')
let paragraph = document.querySelector('.paragraph')
let linksColor = document.querySelector('.nav-links')
let menuColor = document.querySelector('.menu-links')


function showOver (bg, titles, paragraphs, linksColors, menuColors) {
    backgroundImage.style.backgroundImage = bg
    title.innerHTML = titles
    paragraph.innerHTML = paragraphs
    linksColor.style.color = linksColors
    menuColor.style.color = menuColors
}

function hideOver() {
    backgroundImage.style.backgroundImage = "url('./images/bg.jpeg')";
    title.innerHTML = "Experience Tesla"
    paragraph.innerHTML = "Schedule a demo drive today"
    linksColor.style.color = 'black'
    menuColor.style.color = 'black'
}
modelS.onmouseover = () => {
    showOver("url('./images/model-s.jpeg')", "Model S", "Plad")
};
model3.onmouseover = () => {
    showOver("url('./images/model-3.jpeg')", "Model 3", "Plad")
};
modelX.onmouseover = () => {
    showOver("url('./images/model-x.webp')", "Model X", "Plad", "white", "white")
};
modelY.onmouseover = () => {
    showOver("url('./images/model-y.webp')", "Model Y", "Plad")
};
roof.onmouseover = () => {
    showOver("url('./images/solar-roof.webp')", "Solar Roof", "Beautiful Solar")
};
panels.onmouseover = () => {
    showOver("url('./images/panels.webp')", "Solar Panels", "Lowest Cost Solar Panels in America")
};
powerwall.onmouseover = () => {
    showOver("url('./images/powerwall.webp')", "Powerwall", "Backup energy storage")
};
// on mouse out
modelS.onmouseout = () => {hideOver()};
model3.onmouseout = () => {hideOver()}
modelX.onmouseout = () => {hideOver()}
modelY.onmouseout = () => {hideOver()}
roof.onmouseout = () => {hideOver()}
panels.onmouseout = () => {hideOver()}
powerwall.onmouseout = () => {hideOver()}