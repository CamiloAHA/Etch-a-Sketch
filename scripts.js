function gridCreation(size) {
    const boxSize = 800 / size
    const container = document.querySelector('.container')
    const div = document.createElement('div')
    div.classList.add('box')
    const rowDiv = document.createElement('div')
    rowDiv.classList.add('rowContainer')
    const rowFragment = new DocumentFragment()
    const columnFragment = new DocumentFragment()

    for (let i = 0; i < size; i++) {
        rowFragment.appendChild(div.cloneNode(true))
    }
    rowDiv.appendChild(rowFragment)
    for (let i = 0; i < size; i++) {
        columnFragment.appendChild(rowDiv.cloneNode(true))
    }

    container.appendChild(columnFragment)

    let rainbow = false
    const button = document.querySelector('#rainbowMode')
    button.addEventListener('click', () => {
        if (rainbow) rainbow = false
        else rainbow = true
    })

    const boxes = document.querySelectorAll('.box')

    boxes.forEach(box => box.style.cssText = `width:${boxSize}px; height:${boxSize}px;`)
    boxes.forEach(box => box.addEventListener('mouseover', e => {
        if (rainbow) e.target.style.backgroundColor = randomColor()
        else {
            e.target.style.backgroundColor = 'rgb(128, 0, 128)'
            if (e.target.style.opacity === '') e.target.style.opacity = 0.1
            else {
                opacity = +e.target.style.opacity //Get actual opacity and converts to number
                e.target.style.opacity = opacity + 0.1
            }
        }
    }))

    gridMargins() //This needs to go here for margins to work after grid size change
    clearGrid() //Same as above
}

function randomColor() {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function gridDelete() {
    const container = document.querySelector('.container')
    const boxes = document.querySelectorAll('.rowContainer')
    boxes.forEach(box => container.removeChild(box))
}

function gridSizeChange() {
    const button = document.querySelector('#sizeButton')
    let userInput
    button.addEventListener('click', () => {
        userInput = parseInt(prompt("Select a grid size (1-100)"), 10)
        if (userInput > 0 && userInput < 101) {
            gridDelete()
            gridCreation(userInput)
        } else {
            alert("You have entered an invalid value")
        }
    })
}

function clearGrid() {
    const button = document.querySelector('#clearGrid')
    const boxes = document.querySelectorAll('.box')

    button.addEventListener('click', () => {
        boxes.forEach(box => {
            box.style.backgroundColor = 'orange'
            box.style.opacity = ''
        })
    })
}

function gridMargins() {
    const button = document.querySelector('#gridMargins')
    const boxes = document.querySelectorAll('.box')

    button.addEventListener('click', () => {
        boxes.forEach(box => {
            if (box.style.border === '') {
                box.style.border = '1px solid rgba(0, 0, 0, 0.1)'
            } else {
                box.style.border = ''
            }
        })
    })
}

gridCreation(16)
gridSizeChange()