let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')

btn1.addEventListener('click', function(){
    let inputNum = document.querySelector('.num')
    let num = parseInt(inputNum.innerText) - 1

    document.querySelector('.num').innerText = num
})

btn2.addEventListener('click', function(){
    let inputNum = document.querySelector('.num')
    let num = parseInt(inputNum.innerText) + 1

    document.querySelector('.num').innerText = num
})