/* 
    SÍNCRONO E ASSÍNCRONO
 */

function primeira(){
    console.log('primeira')
}

function segunda(){
    console.log('segunda')
}
/* 
    Isso é um código síncrono. Significa que o programa irá executar as funções na ordem em que colocarmos

        primeira()
        segunda()
*/
/* 
    Isso é um código assíncrono. Significa que o programa não irá para a execução nessa linha, esperar 2 segundos, executar o comando e ai sim continuar o código. Na verdade o programa passa pelo timeout()

        setTimeout(primeira, 2000)
        segunda()
*/