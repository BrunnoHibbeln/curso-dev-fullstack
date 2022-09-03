import { useState } from "react"

import { 
   Button,
   TextField, 
   Typography,
} from "@material-ui/core"

import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
   wrapper: {
      margin: theme.spacing(3),
   }
}))


const Login = () => {
   const classes = useStyles()

   const [form, setForm] = useState({
      email: '',
      password: '',
   })

   const handleInputChange = e => {
      const { name, value } = e.target

      setForm({
         ...form,
         [name]: value,
      })
   }

   const handleFormSubmit = () => {
      console.log(form)
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
               type='password'
            /> 
         </div>
         <div>
            <Button 
               variant="contained" 
               color="primary"
               onClick={handleFormSubmit}
            >
               Entry
            </Button>
         </div>
      </>
   )
}

export default Login