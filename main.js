const player1 = document.getElementById('player-1');
const player2 = document.getElementById('player-2');
const resultArea = document.getElementById('result-area');
const playBtn = document.getElementById('play-btn');

const choices = ['✊', '🤚', '✌️'];

const decideWinner = (a, b) => {
    if (a === b) {
        return "It's a Tie!";
    } else if (
        (a === '✊' && b === '✌️') || 
        (a === '🤚' && b === '✊') || 
        (a === '✌️' && b === '🤚')
    ) {
        return "Player 1 Wins!";
    } else {
        return "Player 2 Wins!";
    }
};

const play = () => {
    const choice1 = choices[Math.floor(Math.random() * choices.length)];
    const choice2 = choices[Math.floor(Math.random() * choices.length)];

    player1.textContent = choice1;
    player2.textContent = choice2;
    resultArea.textContent = decideWinner(choice1, choice2);
};

playBtn.addEventListener('click', play);