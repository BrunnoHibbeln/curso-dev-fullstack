import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom'

import TemplateDefault from './templates/Default'

import Customers from './pages/Customers'
import Home from './pages/Home'

const App = () => {
	return (
		<TemplateDefault>

		<Router>
			<Routes>
				<Route path="/customers" element={ <Customers /> } />
				<Route path="/" element={ <Home /> } />
			</Routes>
		</Router>

		</TemplateDefault>
	)
}

export default App
