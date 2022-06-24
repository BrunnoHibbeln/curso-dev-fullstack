import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton
} from '@material-ui/core'

// Para importar 'icons' não podemos utilizar a desestruturação
import MenuIcon from '@material-ui/icons/Menu'

const Header = () => {

   return (
		<AppBar position="static">
			<Toolbar>
			<IconButton edge="start" color="inherit" aria-label="menu">
				<MenuIcon />
			</IconButton>
			<Typography variant="h6">
				News
			</Typography>
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
   )
}

export default Header