const DEFAULT_COLOR = '#fff'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

const colorBtn = document.getElementById('color-btn')
const rainbowBtn = document.getElementById('rainbow-btn')
const eraserBtn = document.getElementById('eraser-btn')
const clearBtn = document.getElementById('clear-btn')
const sizeSlider = document.getElementById('size')
const sizeLabel = document.getElementById('size-label')
const grid = document.getElementById('game')

function setCurrentColor(newColor) {
    currentColor = newColor
}

function setCurrentMode(newMode) {
    activeBtn(newMode)
    currentMode = newMode
}

function setCurrentSize(newSize) {
    currentSize = newSize
}

