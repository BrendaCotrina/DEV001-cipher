import cipher from './cipher.js';

const encryptButton = document.getElementById('encrypt');
const decryptButton = document.getElementById('decrypt');

encryptButton.addEventListener('click', function () {
    let offset = document.getElementById('offset').value;
    let message = document.getElementById('message').value;
    const encoded = cipher.encode(offset, message)
    document.getElementById('result').innerHTML = encoded;
});

decryptButton.addEventListener('click', function () {
    let offset = document.getElementById('offset').value;
    let message = document.getElementById('message').value;
    const decoded = cipher.decode(offset, message)
    document.getElementById('result').innerHTML = decoded;
});

console.log(cipher);
