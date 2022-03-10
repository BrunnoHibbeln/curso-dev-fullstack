/* 

    Hoisting é o comportamento padrão do JavaScript de mover as declarações para o topo de um escopo.

*/

function teste(){

    // outroTeste()

    function outroTeste(){
        console.log('ok sou a outra função')
    }

    outroTeste() // Basicamente por conta do hoisting podemos chamar a função tanto depois da declaração, como antes também. Porém é uma boa prática sempre chamarmos uma função após a declaração da mesma.
}