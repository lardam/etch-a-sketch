//Set defaults (color, mode and size)

const DEFAULT_COLOR = 'rgb(3, 145, 78)'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

//Set variables (color, mode and size)

let currentColor = DEFAULT_COLOR
let currentMode  = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

//Get DOM elements and addEventListener

const colorPicker = document.getElementById('picker')
const colorBtn = document.getElementById('color-btn')
const rainbowBtn = document.getElementById('rainbow-btn')
const eraserBtn = document.getElementById('eraser-btn')
const clearBtn = document.getElementById('clear-btn')
const sizeSlider = document.getElementById('size')
const sizeLabel = document.getElementById('size-label')
const grid = document.getElementById('game')

colorPicker.onchange = (e) => {
    setColor(e.target.value)

    colorBtn.classList.add('active')
    rainbowBtn.classList.remove('active')
    eraserBtn.classList.remove('active')
}
colorBtn.onclick = () => setMode('color')
rainbowBtn.onclick = () => setMode('rainbow')
eraserBtn.onclick = () => setMode('eraser')
clearBtn.onclick = () => restart()

//setMode on clicked btns, add function to each btn (color, rainbow
//eraser & clear)

//adjust grid size with slider, add clear grid

function setColor(newColor) {
    currentColor = newColor
}

function setMode(newMode) {
    btns(newMode)
    currentMode = newMode
}

function setSize(newSize) {
    currentSize = newSize
}

function createGrid() {
    grid.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`

    for(i = 0; i < currentSize * currentSize; i++){
        const pixel = document.createElement('div')
        pixel.classList.add('pixel')
        grid.appendChild(pixel)

        pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = currentColor;
        })
    }
}

function btns() {
    if (currentMode === 'color') {
        colorBtn.classList.add('active')
        rainbowBtn.classList.remove('active')
        eraserBtn.classList.remove('active')
    }
    else if(currentMode === 'rainbow') {
        rainbowBtn.classList.add('active')
        colorBtn.classList.remove('active')
        eraserBtn.classList.remove('active')
    }
    else if(currentMode === 'eraser') {
        eraserBtn.classList.add('active')
        colorBtn.classList.remove('active')
        rainbowBtn.classList.remove('active')
    }
}

function draw() {
    if(currentMode === 'rainbow') {
        currentColor = rainbow
    }
    if(currentMode === 'eraser') {
        currentColor = 'rgb(256, 256, 256)'
    }
}

window.onload = () => {
    createGrid()
    draw()
}