import { useState } from 'react'
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Drawer,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core'

import { useNavigate } from 'react-router-dom'

// Para importar 'icons' não é possível utilizar desestruturação
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import Person from '@material-ui/icons/Person'
import PersonAdd from '@material-ui/icons/PersonAdd'
import useStyles from './Header.style'

const Header = ({ user }) => {
	const classes = useStyles()
	let navigate = useNavigate()

	const [menuOpen, setMenuOpen] = useState(false)

	const handleToggleMenu = () => {
		// inverte o valor do 'menuOpen'
		setMenuOpen(!menuOpen)
	}
	const handleMenuClick = route => {
		// atribui a rota
		navigate(route)
		// fecha o menu
		handleToggleMenu()
	}

   return (
		<>
			<AppBar position="static">
				<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu" onClick={() => handleToggleMenu()}>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					My app
				</Typography>
					{
						user.logged
						?	<Typography variant="h5">
								{ user.email }
							</Typography>

						:	<Button color="inherit">Login</Button>
					}
				</Toolbar>
			</AppBar>

			<Drawer open={menuOpen} onClose={ () => handleToggleMenu() }>
				<ListItem button onClick={ () => handleMenuClick('/') }>
					<ListItemIcon> <HomeIcon /> </ListItemIcon>
					<ListItemText>Home</ListItemText>
				</ListItem>
				<ListItem button onClick={ () => handleMenuClick('/customers') }>
					<ListItemIcon> <Person /> </ListItemIcon>
					<ListItemText>Customers</ListItemText>
				</ListItem>
				<ListItem button onClick={ () => handleMenuClick('/customers/add') }>
					<ListItemIcon> <PersonAdd /> </ListItemIcon>
					<ListItemText>Customers add</ListItemText>
				</ListItem>
			</Drawer>
		</>	
   )
}

export default Header