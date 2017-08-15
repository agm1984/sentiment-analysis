// Set initial state
let status = 'hidden'

function toggleText() {

    if (status == 'hidden') {

        document.getElementById('textArea').style.display = 'initial'
        document.getElementById('toggleButton').innerText = 'Hide Text'
        status = 'visible'
    } else if (status == 'visible') {

        document.getElementById('textArea').style.display = 'none'
        document.getElementById('toggleButton').innerText = 'See Text'
        status = 'hidden'
    }
}
