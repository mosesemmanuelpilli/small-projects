function checkNumber() {
    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
    
    if (numberInput === '') {
        resultElement.textContent = 'Please enter a number.';
        return;
    }
    
    const number = parseInt(numberInput);
    
    if (isNaN(number)) {
        resultElement.textContent = 'Please enter a valid number.';
        return;
    }
    
    if (number % 2 === 0) {
        resultElement.textContent = `${number} is an even number.`;
    } else {
        resultElement.textContent = `${number} is an odd number.`;
    }
}

