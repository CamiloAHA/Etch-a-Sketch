function gridCreation(size) {
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

    let boxSize = 800 / size

    const boxes = document.querySelectorAll('.box')

    boxes.forEach(box => box.style.cssText = `width:${boxSize}px; height:${boxSize}px;`)
    boxes.forEach(box => box.addEventListener('mouseover', e => e.target.style.backgroundColor = 'purple'))
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

gridCreation(16)
gridSizeChange()