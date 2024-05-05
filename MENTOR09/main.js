function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        display.value = result.toFixed(2);
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if(/[0-9+\-*/.=]|Enter|Backspace|Escape/.test(key)) {
        event.preventDefault();
        
        if(key === '=' || key === 'Enter') {
            calculate();
        } else if(key === 'Escape') {
            clearDisplay();
        } else if(key === 'Backspace') {
            const display = document.getElementById('display');
            display.value = display.value.slice(0, -1);
        } else {
            appendToDisplay(key);
        }
    }
});
