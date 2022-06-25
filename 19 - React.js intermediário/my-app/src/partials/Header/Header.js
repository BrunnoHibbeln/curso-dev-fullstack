import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
} from '@material-ui/core'

// Para importar 'icons' não é possível utilizar desestruturação
import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './Header.style'

const Header = () => {
	const classes = useStyles()

   return (

		<AppBar position="static">
			<Toolbar>
			<IconButton edge="start" color="inherit" aria-label="menu">
				<MenuIcon />
			</IconButton>
			<Typography variant="h6" className={classes.title}>
				My app
			</Typography>
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
   )
}

export default Header