import cipher from './cipher.js';

const encryptButton = document.getElementById('encrypt');
const decryptButton = document.getElementById('decrypt');

encryptButton.addEventListener('click', function () {
    let offset = document.getElementById('offset').value;
    let message = document.getElementById('message').value;
    let result = cipher.encode(offset, message)
    document.getElementById('result').innerHTML = result;
});

decryptButton.addEventListener('click', function () {
    let offset = document.getElementById('offset').value;
    let message = document.getElementById('message').value;
    let result = cipher.decode(offset, message)
    document.getElementById('result').innerHTML = result;
});

console.log(cipher);
