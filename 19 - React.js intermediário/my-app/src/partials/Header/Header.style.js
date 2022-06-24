import { makeStyles } from '@material-ui/core/styles'
   
// JSS - CSS dentro do JS
const useStyles = makeStyles(() => ({
   // Para usar o 'return' implícito, devemos adicionar um parênteses dentro das chaves '{}'

   // Aqui criamos as classes
   title: {

      // No CSS a propriedade abaixo é 'flex-grow' porém aqui não podemos utilizar essa nomenclatura, devemos usar o padrão 'camelCase'. E também não é preciso utilizar o 'px' no final.
      flexGrow: 1,
      marginLeft: 15,
   },
   header: {
      borderRadius: 5,
      backgroundColor: '#839f',
   }	
}))

export default useStyles