window.onload = () => {
    colorBtn.classList.add('active')
    createGrid()
}

//Set defaults (color, mode and size)

const DEFAULT_COLOR = 'rgb(0, 0, 0)'
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

//Event listeners

colorPicker.onchange = (e) => {
    setColor(e.target.value)
    setMode('color')

    colorBtn.classList.add('active')
    rainbowBtn.classList.remove('active')
    eraserBtn.classList.remove('active')

    //If you comeback from rainbow/eraser to color, it will take the last color selected instead of default

    colorBtn.onclick = () => {
        setColor(e.target.value)
        setMode('color')
        currentColor = e.target.value
        
        colorBtn.classList.add('active')
        rainbowBtn.classList.remove('active')
        eraserBtn.classList.remove('active')
      }
}
rainbowBtn.onclick = () => {
   setMode('rainbow')
  
   rainbowBtn.classList.add('active')
   colorBtn.classList.remove('active')
   eraserBtn.classList.remove('active')
}
eraserBtn.onclick = () => {
    setMode('eraser')
  
    eraserBtn.classList.add('active')
    colorBtn.classList.remove('active')
    rainbowBtn.classList.remove('active')
}
clearBtn.onclick = () => restart()

//Functions to get newThings

function setColor(newColor) {
    currentColor = newColor
}

function setMode(newMode) {
    currentMode = newMode
}

function setSize(newSize) {
    currentSize = newSize
}

//Divide sandbox with grid - Create div 4each pixel

function createGrid() {
    grid.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`
    editGrid()
    setGrid()

    //Create divs - addEventListener 4each

    for(i = 0; i < currentSize * currentSize; i++){
        const pixel = document.createElement('div')
        pixel.classList.add('pixel')
        grid.appendChild(pixel)
        pixel.addEventListener('mouseover', changeColor)
    }
}


//Modify the amount of pixels in the sandbox

function editGrid() {
    sizeLabel.innerText = `Current size: ${currentSize} x ${currentSize}`

    sizeSlider.addEventListener('mousemove', ()=>{
        sizeLabel.innerText = `Current size: ${currentSize} x ${currentSize}`
        currentSize = sizeSlider.value
    })
}

function setGrid() {
    const setBtn = document.getElementById('set-size')

    setBtn.addEventListener('click', ()=> {
        restart()
    })
}

//Change color with each mode change

function changeColor(e) {
    if(currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
            
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
    else if(currentMode === 'color') {
        const actualValue = document.getElementById('picker').value

        e.target.style.backgroundColor = actualValue
    }
    else if(currentMode === 'eraser') {
        e.target.style.backgroundColor = '#fff'
    }
}

//Clear & restart grid

function restart() {
  grid.innerHTML = ''
  createGrid()
}

//Dark mode

let today = new Date()
let hour = today.getHours();

const body = document.body
const switchBtn = document.getElementById('switch-light')
const switchIcon = document.getElementById('switch-icon')

if(hour > 17 || hour < 6){
    body.classList.add('dark-mode')
    switchIcon.classList.add('fa-moon')
} else{
    body.classList.add('light-mode')
    switchIcon.classList.add('fa-sun')
}

switchBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode')
    body.classList.toggle('dark-mode')
    switchIcon.classList.toggle('fa-sun')
    switchIcon.classList.toggle('fa-moon')
})