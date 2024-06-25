function calculatePercentage() {
    const number = parseFloat(document.getElementById('number').value);
    const percentage = parseFloat(document.getElementById('percentage').value);
    if (isNaN(number) || isNaN(percentage)) {
        document.getElementById('result').textContent = 'Please enter valid numbers';
        return;
    }
    const result = (number * percentage) / 100;
    document.getElementById('result').textContent = `${percentage}% of ${number} is ${result}`;
}
