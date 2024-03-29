function calculateTip(tipPercentage) {
    var billAmount = parseFloat(document.getElementById('billAmount').value);
    var numPeople = parseInt(document.getElementById('numPeople').value);
    
    var tipAmount = (billAmount * (tipPercentage / 100)) / numPeople;
    var totalAmount = (billAmount / numPeople) + tipAmount;
    
    document.getElementById('tipAmount').innerText = '$' + tipAmount.toFixed(2);
    document.getElementById('totalAmount').innerText = '$' + totalAmount.toFixed(2);
}

function resetCalculator() {
    document.getElementById('billAmount').value = '0.00';
    document.getElementById('customTip').value = '';
    document.getElementById('numPeople').value = '1';
    document.getElementById('tipAmount').innerText = '$0.00';
    document.getElementById('totalAmount').innerText = '$0.00';
}