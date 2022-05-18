function gridCreation() {
    const container = document.querySelector('.container')
    const div = document.createElement('div')
    div.classList.add('box')
    const rowDiv = document.createElement('div')
    rowDiv.classList.add('rowContainer')
    const rowFragment = new DocumentFragment()
    const columnFragment = new DocumentFragment()

    for (let i = 0; i < 16; i++) {
        rowFragment.appendChild(div.cloneNode(true))
    }
    rowDiv.appendChild(rowFragment)
    for (let i = 0; i < 16; i++) {
        columnFragment.appendChild(rowDiv.cloneNode(true))
    }

    container.appendChild(columnFragment)
}

function hoverEvents(){
    const boxes= document.querySelectorAll('.box')
    boxes.forEach(box => {   
        box.addEventListener('mouseover', e => e.target.style.backgroundColor = 'purple')
    })
}

gridCreation()
hoverEvents()