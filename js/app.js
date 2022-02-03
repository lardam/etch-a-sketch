//Set defaults

const DEFAULT_COLOR = 'rgb(3, 145, 78)'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

//Set variables

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

//Get DOM elements

const colorPicker = document.getElementById('picker')
const colorBtn = document.getElementById('color-btn')
const rainbowBtn = document.getElementById('rainbow-btn')
const eraserBtn = document.getElementById('eraser-btn')
const clearBtn = document.getElementById('clear-btn')
const sizeSlider = document.getElementById('size')
const sizeLabel = document.getElementById('size-label')
const grid = document.getElementById('game')

//Element's first mode

function setColor(newColor) {
    currentColor = newColor
}

function setMode(newMode) {
    currentMode = newMode
}

function setSize(newSize) {
    currentSize = newSize
}

//Changing game modes

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

function btns() {
    colorBtn.classList.add('active') 

    if(currentMode === rainbow()) {
        colorBtn.classList.remove('active')
        rainbowBtn.classList.add('active')
    }
}

btns()

function color() {
    colorBtn.addEventListener('click', () => {
        currentColor = DEFAULT_COLOR
    })
}

function rainbow() {
    rainbowBtn.addEventListener('click', () => {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        
        currentColor = `rgb(${randomR}, ${randomG}, ${randomB})`

        rainbowBtn.classList.add('active')
        colorBtn.classList.remove('active')
        eraserBtn.classList.remove('active')
    })
}

function erase() {
    eraserBtn.addEventListener('click', () => {
        currentColor = 'rgb(256, 256, 256)'

        eraserBtn.classList.add('active')
        colorBtn.classList.remove('active')
        rainbowBtn.classList.remove('active')
    })
}

// addEvList para resetear el grid
function clear() {
    clearBtn.addEventListener('click', () => {
        grid.innerHTML = '';
        draw()
    })
}

color()
rainbow()
erase()
clear()

//crear grid 

function draw() {
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

draw()

