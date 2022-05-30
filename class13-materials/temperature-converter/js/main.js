document.querySelector('#btn').addEventListener('click', convert)

function convert () {
    const temp = document.querySelector('#input').value
    
    output = temp * 9/5 + 32;

    document.querySelector('#output').innerText = output
}