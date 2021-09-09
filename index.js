const bt_Ho = document.getElementById('btHo')
const bt_Sham = document.getElementById('btSham')
const bt_Bo = document.getElementById('btBo')
const guns = ['Ho','Sham','Bo']
    
bt_Ho.addEventListener('click', btHo)
bt_Sham.addEventListener('click', btSham)
bt_Bo.addEventListener('click', btBo)

function randomMachine() {
    const machine = Math.floor(Math.random() * 3)
    return machine 
}

function btHo() {
    verifyWinner(0)
}
function btSham() {
    verifyWinner(1)
}
function btBo() {
    verifyWinner(2)
}
function btClear() {
    // Implementar um Clear
}

function verifyWinner(player) {
    let machine = randomMachine()
    let resultGame = ''
    
    const playerChoice = document.getElementById('playerChoice')
    const result = document.getElementById('result')
    const machineRandon = document.getElementById('machineRandon')

    if (player === machine) {
        machineRandon.innerText = `${guns[machine].toUpperCase()}`
        playerChoice.innerText = `${guns[player].toUpperCase()}`
        result.innerText = 'EMPATE!'
    } else if (player === 0 && machine === 1) {
        machineRandon.innerText = `${guns[machine].toUpperCase()}`
        playerChoice.innerText = `${guns[player].toUpperCase()}`
        result.innerText = 'Machine GANHA!'
    } else if (player === 0 && machine === 2) {
        machineRandon.innerText = `${guns[machine].toUpperCase()}`
        playerChoice.innerText = `${guns[player].toUpperCase()}`
        result.innerText = 'Player GANHA!'
    } else if (player === 1 && machine === 0) {
        machineRandon.innerText = `${guns[machine].toUpperCase()}`
        playerChoice.innerText = `${guns[player].toUpperCase()}`
        result.innerText = 'Player ganha!'
    } else if (player === 1 && machine === 2) {
        machineRandon.innerText = `${guns[machine].toUpperCase()}`
        playerChoice.innerText = `${guns[player].toUpperCase()}`
        result.innerText = 'Machine GANHA!'
    } else if (player === 2 && machine === 0) {
        machineRandon.innerText = `${guns[machine].toUpperCase()}`
        playerChoice.innerText = `${guns[player].toUpperCase()}`
        result.innerText = 'Machine GANHA!'
    } else if (player === 2 && machine === 1) {
        machineRandon.innerText = `${guns[machine].toUpperCase()}`
        playerChoice.innerText = `${guns[player].toUpperCase()}`
        result.innerText = 'Player GANHA!'
    } 
}
verifyWinner()