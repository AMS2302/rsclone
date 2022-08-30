const SELECTORS = {
    userGrid: '.grid-user',
    computerGrid: '.grid-computer',
    displayGrid: '.grid-display',
    ships: '.ship',
    doubleDeckContainer: '.doubleDeck-container',
    doubleDeckVertical: 'doubleDeck-container-vertical',
    tripleDeckContainer: '.tripleDeck-container',
    tripleDeckVertical: 'tripleDeck-container-vertical',
    fourDeck: '.fourDeck-container',
    fourDeckVertical: 'fourDeck-container-vertical',
    rotateButton: '#rotate',
    turnDisplay: '#whose-go',
    infoDisplay: '#info',
    btnStart: '#start',
    btnRandom: '#random',
    btnDrop: '#drop',
} as const;

export default SELECTORS;
