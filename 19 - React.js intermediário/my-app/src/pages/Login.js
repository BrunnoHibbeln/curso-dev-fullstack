import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { 
   Button,
   TextField, 
   Typography,
   makeStyles,
} from "@material-ui/core"

import useAuth from '../state/auth'

const useStyles = makeStyles((theme) => ({
   wrapper: {
      margin: theme.spacing(3),
   }
}))

const Login = () => {
   const classes = useStyles()
   let navigate = useNavigate()

   const [form, setForm] = useState({
      email: '',
      password: '',
   })
   const [isLoading, setIsLoading] = useState(false)
   const [user, setUser] = useAuth()

   const handleInputChange = e => {
      const { name, value } = e.target

      setForm({
         ...form,
         [name]: value,
      })
   }
   const handleFormSubmit = () => {
      setIsLoading(true)

      setTimeout(() => {
         
         setUser({
            logged: true,
            email: form.email,
         }) 

         navigate('/')
      }, 4000)
   }

   return (
      <>
         <Typography variant="h3">
            Denied Access
         </Typography>

         <div className={classes.wrapper}>
            <TextField 
               onChange={handleInputChange}
               label="Type your email"
               name="email"
            /> 
         </div>
         <div className={classes.wrapper}>
            <TextField 
               onChange={handleInputChange}
               label="Type your password"
               name="password"
               type="password"
            /> 
         </div>
         <div>
            <Button 
               variant="contained" 
               color="primary"
               onClick={handleFormSubmit}
            >
               {
                  isLoading ? 'Wait...' : 'Entry'
               }
            </Button>
         </div>
      </>
   )
}

export default Login