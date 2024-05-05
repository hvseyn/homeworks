// Zar atma fonksiyonu
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Zar atma butonunu bulma
const rollButton = document.getElementById('roll-button');

// Zarları temsil eden elementleri bulma
const dice1Element = document.getElementById('dice1');
const dice2Element = document.getElementById('dice2');

// Zar atma butonuna tıklama olayını dinleme
rollButton.addEventListener('click', function() {
    const dice1 = rollDice();
    const dice2 = rollDice();
    
    // Zarları gösterme
    dice1Element.innerText = dice1;
    dice2Element.innerText = dice2;
    
    // Zar animasyonunu başlatma
    dice1Element.style.animation = 'roll 0.5s linear';
    dice2Element.style.animation = 'roll 0.5s linear';
    
    // Animasyonun bitiminde zarları temizleme
    setTimeout(() => {
        dice1Element.style.animation = '';
        dice2Element.style.animation = '';
    }, 500);
});
