// Get all cards
const cards = document.querySelectorAll('.card');

let flippedCards = [];
let matchedPairs = 0;

// Add click handler to each card
cards.forEach(card => {
    card.addEventListener('click', function() {
        // Ignore if card is already flipped or we already have 2 cards flipped
        if (card.classList.contains('flipped') || flippedCards.length >= 2) return;

        // Flip the card
        card.classList.add('flipped');
        flippedCards.push(card);

        // If we have 2 cards flipped, check for match
        if (flippedCards.length === 2) {
            checkMatch();
        }
    });
});

function checkMatch() {
    const [card1, card2] = flippedCards;
    const img1 = card1.querySelector('.card-back img').src;
    const img2 = card2.querySelector('.card-back img').src;

    if (img1 === img2) {
        // It's a match!
        matchedPairs++;
        flippedCards = [];
        
    } else {
        // Not a match, flip cards back
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}