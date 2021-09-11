const body = document.getElementsByTagName('body')[0]
// console.log(body)
const section1 = document.getElementById('section1')
const button = document.createElement('button')
// console.log(button)



const imgBtM8b = new Image (200,200)
 
const imgSource = 'https://kenzie-academy-brasil-developers.github.io/entrega-construa-um-jogo-de-azar-sprint-3-pablorgoncalves/m8b/img/'
// const randomM8b = Math.floor(Math.random() * 2)


section1.appendChild(button)
button.appendChild(imgBtM8b)
imgBtM8b.src = `img/m8b.jpg`
imgBtM8b.setAttribute('id', 'imgM8b')

button.setAttribute('id', 'btM8b')
const btM8b = document.getElementById('btM8b')

button.addEventListener('click', m8bClick)

// btM8b.addEventListener('dblclick', m8bDblClick)

function m8bClick() {
    let randomM8b = Math.floor(Math.random() * 2)
        console.log(randomM8b)

        if (randomM8b === 0){
            body.style.backgroundColor = '#111'
        } else {
            body.style.backgroundColor = '#ff0000'
        }
    }

// function m8bDblClick() {
//     body.style.backgroundColor = '#222'
// }

