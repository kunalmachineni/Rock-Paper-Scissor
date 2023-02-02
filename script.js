const totalScore = { computerScore: 0, playerScore: 0 }
function getComputerChoice() {
    const rpsChoice = ['Rock', 'Paper', 'Scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return rpsChoice[randomNumber]
}
function getResult(playerChoice, ComputerChoice) {
    let score
    if (playerChoice == ComputerChoice) {
        score = 0
    } else if (playerChoice == 'Rock' && ComputerChoice == 'Scissors') {
        score = 1
    } else if (playerChoice == 'Paper' && ComputerChoice == 'Rock') {
        score = 1
    } else if (playerChoice == 'Scissors' && ComputerChoice == 'Paper') {
        score = 1
    } else {
        score = -1
    }
    return score
}
function showResult(score, playerChoice, computerChoice) {
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
    if (score == -1) {
        resultDiv.innerText = 'You Lose!'
    } else if (score == 0) {
        resultDiv.innerText = "It's a tie!"
    } else {
        resultDiv.innerText = 'You Won!'
    }
    handsDiv.innerText = `👱${playerChoice} vs 🤖${computerChoice}`
    playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
}
function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice, computerChoice)
    totalScore['playerScore'] += score
    showResult(score, playerChoice, computerChoice)
}
function playGame() {
    const rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })
    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame(totalScore)
}
function endGame(totalScore) {
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
    resultDiv.innerText = ''
    handsDiv.innerText = ''
    playerScoreDiv.innerText = ''
}
playGame()