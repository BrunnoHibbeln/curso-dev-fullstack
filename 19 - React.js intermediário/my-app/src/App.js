import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

import Customers from './pages/Customers'
import Home from './pages/Home'

const App = () => {
	return (
		<TemplateDefault>
			<Router>
				<Routes>
					<Route path="/customers" element={ <TemplatePage title="Customers" Component={Customers} /> }/>
					<Route path="/" element={ <TemplatePage title="Inicial page" Component={Home} /> } />
				</Routes>
			</Router>
		</TemplateDefault>
	)
} 

export default App
