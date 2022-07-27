import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import CustomersCard from '../../components/CustomerCard'

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   card: {
      margin: theme.spacing(2),
   }
}))

const List = () => {

   const classes = useStyles()
   const navigate = useNavigate()

   const [customers, setCustomers] = useState([])

   useEffect(() => {
      axios.get('https://reqres.in/api/users')
         .then(response => {
            const { data } = response.data

            setCustomers(data)
         })
   }, [])

   const handleRemoveCustomer = id => {
      axios.delete(`https://reqres.in/api/users/${id}`)
         .then(() => {

            // Usamos o filter para adicionar todos os 'customers' que não tem o id em questão
            const newCustomersState = customers.filter(customer => customer.id !== id)
            // E atribuimos novamente ao 'customers'
            setCustomers(newCustomersState)
         })
   }

   const handleEditCustomer = id => {
      navigate(`/customers/edit/${id}`)
   }

   return (
      <>
         <Grid container>

            {
               /* 
                  xs = Extra small
                  sm = Small
                  md = Medium
                  lg = Large
                  xl = Extra large
               */

               customers.map(item => (
                  <Grid item xs={12} sm={6} md={4} >
                     <CustomersCard
                     id={item.id}
                        name={item.first_name}
                        lastname={item.last_name}
                        email={item.email}
                        avatar={item.avatar}
                        className={classes.card}
                        onRemoveCustomer={handleRemoveCustomer}
                        onEditCustomer={handleEditCustomer}
                     />
                  </Grid>
               ))
            }
         </Grid>
      </>
   )
}

export default List
