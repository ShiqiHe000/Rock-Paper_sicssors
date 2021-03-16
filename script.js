const selectionButtons = document.querySelectorAll('.selection');

const finalColumn = document.querySelector('[data-final-column]');

const myScores = document.querySelector('[data-my-scores]');
const computersScores = document.querySelector('[data-computers-scores]');

const SELECTIONS = [
    {
        name: "rock", 
        emoji: "✊", 
        beats: "scissors"
    },
    {
        name: "scissors", 
        emoji: "✌️", 
        beats: "paper"
    },
    {
        name: "paper", 
        emoji: "✋", 
        beats: "rock"
    }
];


const results = document.querySelector('.results');




selectionButtons.forEach(selection => {
    selection.addEventListener('click', () => {

        const selectionName = selection.dataset.selection;
        
        const mySelection = SELECTIONS.find(item => {
            return item.name === selectionName
        })

        const computersSelection = randomSelection();

        makeSelection(mySelection, computersSelection);

    })
})

function makeSelection(mySelection, computersSelection) {
    const iWin = mySelection.beats === computersSelection.name;

    const computerWins = mySelection.name === computersSelection.beats;

    addSelectedResult(computersSelection, computerWins);
    addSelectedResult(mySelection, iWin);

    changeScores(myScores, iWin);
    changeScores(computersScores, computerWins);
}

function changeScores(scores, winner){
    if(winner) {
        scores.innerText = parseInt(scores.innerText) + 1;
    }
}

function addSelectedResult(selection, winner){
    const div = document.createElement('DIV');
    div.innerText = selection.emoji;
    div.classList.add('results-selection');

    if(winner) {
        div.classList.add('winner');
    }

    finalColumn.after(div);
}

function randomSelection() {
    
    const randomNumber = Math.floor(Math.random() * SELECTIONS.length);

    return SELECTIONS[randomNumber];
    
}