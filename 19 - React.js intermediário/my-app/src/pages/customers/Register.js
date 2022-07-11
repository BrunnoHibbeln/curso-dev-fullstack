import { makeStyles } from '@material-ui/core'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
   wrapper: {
      margin: theme.spacing(2),
   }
}))

const Register = () => {
   const classes = useStyles()
   
   return (
      <>
         <div className={ classes.wrapper }>
            <TextField label="Type your name" variant="outlined"></TextField>
         </div>
         <div className={ classes.wrapper }>
            <TextField label="Enter your position" variant="outlined"></TextField>
         </div>
         <div className={ classes.wrapper }>
            <Button variant="contained" color="primary">Confirm</Button>
         </div>
      </>
   )
}

export default Register