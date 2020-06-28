let result = document.getElementById('result');
let submit = document.getElementById('submit');

function binary(e) {
    e.preventDefault();
    let num = document.getElementById('number').value;

    if (num === '') {
        alert('Please enter a number');
    } else if (num < 0) {
        alert('Please enter a positive number');
    } else {
        result.style.visibility = 'visible';
    }
    binaryNumber = Number(num).toString(2);
    result.innerText = binaryNumber;
}
submit.addEventListener('click', binary);