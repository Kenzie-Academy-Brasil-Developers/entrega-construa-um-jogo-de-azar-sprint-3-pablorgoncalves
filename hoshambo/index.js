const bt_Ho = document.getElementById('btHo')
const bt_Sham = document.getElementById('btSham')
const bt_Bo = document.getElementById('btBo')
const guns = ['Ho Pedra Rock','Sham Papel Paper','Bo Tesoura Scissors']
    
bt_Ho.addEventListener('click', btHo)
bt_Sham.addEventListener('click', btSham)
bt_Bo.addEventListener('click', btBo)

function btHo() {
    verifyWinner(0)
}
function btSham() {
    verifyWinner(1)
}
function btBo() {
    verifyWinner(2)
}

function verifyWinner(player) {
    const machine = Math.floor(Math.random() * 3)
    const playerChoice = document.getElementById('playerChoice')
    const result = document.getElementById('result')
    const machineRandon = document.getElementById('machineRandon')
    // const imgPlayer = document.createElement('img')
    const imgPlayer = new Image(50,50)
    const imgMachine = new Image(50,50)
    const imgResult = new Image(50,50)
    
    const imgSource = 'https://kenzie-academy-brasil-developers.github.io/entrega-construa-um-jogo-de-azar-sprint-3-pablorgoncalves/hoshambo/img/'
    
    const msg1 = 'TIE!'
    const msg2 = 'Machine Win'
    const msg3 = 'Player Win'

    // Deveria usar um FOR... mas depois eu refaço


    if (player === 0 && machine === 0) {
        result.innerText = msg1.toUpperCase()
        playerChoice.innerText = `${guns[player].toUpperCase()}`
        playerChoice.appendChild(imgPlayer)
        imgPlayer.src = `${imgSource}${player}hand.png`
        machineRandon.innerText = `${guns[machine].toUpperCase()}`
        machineRandon.appendChild(imgMachine)
        imgMachine.src = `${imgSource}${machine}hand.png`
    } else if (player === 1 && machine === 1) {
        playerChoice.innerText = `${guns[player].toUpperCase()}`
        playerChoice.appendChild(imgPlayer)
        imgPlayer.src = `${imgSource}${player}hand.png`
        machineRandon.innerText = `${guns[machine].toUpperCase()}`
        machineRandon.appendChild(imgMachine)
        imgMachine.src = `${imgSource}${machine}hand.png`
        result.innerText = msg1.toUpperCase()
    } else if (player === 2 && machine === 2) {
        playerChoice.innerText = `${guns[player].toUpperCase()}`
        playerChoice.appendChild(imgPlayer)
        imgPlayer.src = `${imgSource}${player}hand.png`
        machineRandon.innerText = `${guns[machine].toUpperCase()}`
        machineRandon.appendChild(imgMachine)
        imgMachine.src = `${imgSource}${machine}hand.png`
        result.innerText = msg1.toUpperCase()
    } else if (player === 0 && machine === 1) {
        playerChoice.innerText = `${guns[player].toUpperCase()}`
        playerChoice.appendChild(imgPlayer)
        imgPlayer.src = `${imgSource}${player}hand.png`
        machineRandon.innerText = `${guns[machine].toUpperCase()}`
        machineRandon.appendChild(imgMachine)
        imgMachine.src = `${imgSource}${machine}hand.png`
        result.innerText = msg2.toUpperCase()
    } else if (player === 0 && machine === 2) {
        playerChoice.innerText = `${guns[player].toUpperCase()}`
        imgPlayer.src = `${imgSource}${player}hand.png`
        playerChoice.appendChild(imgPlayer)
        machineRandon.innerText = `${guns[machine].toUpperCase()}`
        machineRandon.appendChild(imgMachine)
        imgMachine.src = `${imgSource}${machine}hand.png`
        result.innerText = msg3.toUpperCase()
    } else if (player === 1 && machine === 0) {
        playerChoice.innerText = `${guns[player].toUpperCase()}`
        imgPlayer.src = `${imgSource}${player}hand.png`
        playerChoice.appendChild(imgPlayer)
        machineRandon.innerText = `${guns[machine].toUpperCase()}`
        machineRandon.appendChild(imgMachine)
        imgMachine.src = `${imgSource}${machine}hand.png`
        result.innerText = msg3.toUpperCase()
    } else if (player === 1 && machine === 2) {
        playerChoice.innerText = `${guns[player].toUpperCase()}`
        imgPlayer.src = `${imgSource}${player}hand.png`
        playerChoice.appendChild(imgPlayer)
        machineRandon.innerText = `${guns[machine].toUpperCase()}`
        machineRandon.appendChild(imgMachine)
        imgMachine.src = `${imgSource}${machine}hand.png`
        result.innerText = msg2.toUpperCase()
    } else if (player === 2 && machine === 0) {
        playerChoice.innerText = `${guns[player].toUpperCase()}`
        imgPlayer.src = `${imgSource}${player}hand.png`
        playerChoice.appendChild(imgPlayer)
        machineRandon.innerText = `${guns[machine].toUpperCase()}`
        machineRandon.appendChild(imgMachine)
        imgMachine.src = `${imgSource}${machine}hand.png`
        result.innerText = msg2.toUpperCase()
    } else if (player === 2 && machine === 1) {
        playerChoice.innerText = `${guns[player].toUpperCase()}`
        imgPlayer.src = `${imgSource}${player}hand.png`
        playerChoice.appendChild(imgPlayer)
        imgPlayer.style
        machineRandon.innerText = `${guns[machine].toUpperCase()}`
        machineRandon.appendChild(imgMachine)
        imgMachine.src = `${imgSource}${machine}hand.png`
        result.innerText = msg3.toUpperCase()
    } 
}