import { useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

import {
   TextField,
   Button,
} from '@material-ui/core'

import Toasty from '../../components/Toasty'

const useStyles = makeStyles((theme) => ({
   wrapper: {
      margin: theme.spacing(2),
   }
}))

const Register = () => {
   const classes = useStyles()

   const [form, setForm] = useState({
      name: {
         value: '',
         error: false,
      },
      job: {
         value: '',
         error: false,
      },
   })
   const [openToasty, setOpenToasty] = useState({
      open: false,
      text: "",
      severity: "",
   })
   const [isLoading, setLoading] = useState(false)

   const handleInputChange = (e) => {
      const { name, value } = e.target

      setForm({
         ...form,
         [name]: {
            value
         },
      })
   }
   const handleRegisterButton = () => {
      let hasError = false
      let newFormState = {
         ...form,
      }

      if (!form.name.value) {
         hasError = true

         newFormState.name = {
            value: form.name.value,
            error: true,
            helperText: 'Incorrect entry',
         }
      }
      if (!form.job.value) {
         hasError = true

         newFormState.job = {
            value: form.job.value,
            error: true,
            helperText: 'Incorrect entry',
         }
      }

      if (hasError) {
         return setForm(newFormState)
      }

      setLoading(true)

      axios.post('https://reqres.in/api/users', {
         name: form.name.value,
         job: form.job.value,
      })
         .then(response => {
            console.log('ok', response)
            setLoading(false)
            setOpenToasty({
               open: true,
               text: "Registration successful!",
               severity: "success",
            })
         })
         .catch(() => {
            setLoading(false)
            setOpenToasty({
               open: true,
               text: "Error",
               severity: "error",
            })
         })
   }
   
   return (
      <>
         <div className={ classes.wrapper }>
            <TextField
               error={form.name.error}
               helperText={form.name.error ? form.name.helperText : ''}
               label="Type your name" 
               name="name"
               value={form.name.value} 
               onChange={handleInputChange} 
               variant="outlined"
            />
         </div>
         <div className={ classes.wrapper }>
            <TextField 
               error={form.job.error}
               helperText={form.job.error ? form.job.helperText : ''}
               label="Enter your position" 
               name="job"
               value={form.job.value} 
               onChange={handleInputChange} 
               variant="outlined"
            />
         </div>
         <div className={ classes.wrapper }>
            <Button 
               variant="contained" 
               color="primary" 
               onClick={handleRegisterButton}
               disabled={isLoading}
            >
               {
                  isLoading ? <CircularProgress /> : 'Register'
               }
            </Button>
         </div>
         <Toasty 
            open={ openToasty.open } 
            severity={ openToasty.severity } 
            text={ openToasty.text }
            onClose={() =>  setOpenToasty(false)}
         />
      </>
   )
}

export default Register