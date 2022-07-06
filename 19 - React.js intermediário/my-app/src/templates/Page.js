import {
   makeStyles,
   Typography,
} from '@material-ui/core'


const useStyles = makeStyles(() => ({
   container: {
      padding: '15px 0',
      textAlign: 'center',
   }
}))

const Page = ({ title, Component }) => {
   const classes = useStyles()

   return (
      <>
         <Typography variant="h3">
            {title}
         </Typography>
         <Component />
      </>
   )
}

export default Page