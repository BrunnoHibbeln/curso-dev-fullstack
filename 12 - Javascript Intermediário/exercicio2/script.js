const btnDecremento = document.querySelector('.btnDecremento')
const btnIncremento = document.querySelector('.btnIncremento')
const inputCounter = document.querySelector('.num')
let counter = 0

let decremento
let incremento

btnDecremento.onclick = function(){

    clearInterval(incremento)

    btnDecremento.classList.add('buttonRed')
    btnIncremento.classList.remove('buttonGreen')

    decremento = setInterval(function(){

        counter--
        inputCounter.innerText = counter

    }, 100)
}
btnIncremento.onclick = function(){

    clearInterval(decremento)

    btnIncremento.classList.add('buttonGreen')
    btnDecremento.classList.remove('buttonRed')

    incremento = setInterval(function(){

        counter++
        inputCounter.innerText = counter

    },100)
}

