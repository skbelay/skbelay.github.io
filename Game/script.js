const cards = document.querySelectorAll('.card');
const winningTag = document.querySelector('p')

let flippedCards = [];
let matchedPairs = 0;

// add click handler to each card
cards.forEach(card => {
    card.addEventListener('click', function() {
        // ignore if card is already flipped or we already have 2 cards flipped
        if (card.classList.contains('flipped') || flippedCards.length >= 2) return;

        // flip the card
        card.classList.add('flipped');
        flippedCards.push(card);

        // if 2 cards are flipped, check for match
        if (flippedCards.length == 2) {
            checkMatch();
        }
    });
});

function checkMatch() {
    const card1 = flippedCards[0]
    const card2 = flippedCards[1]
    const img1 = card1.querySelector('.card-back img').src;
    const img2 = card2.querySelector('.card-back img').src;

    if (img1 == img2) {
        // match!
        matchedPairs = matchedPairs + 1
        flippedCards = [];
        if (matchedPairs == 6) {
            winningTag.innerHTML = "U got it!";
        }
    } else {
        // not a match, flip cards back
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}
