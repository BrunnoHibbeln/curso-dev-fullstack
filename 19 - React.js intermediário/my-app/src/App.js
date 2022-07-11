import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

import CustomersList from './pages/customers/List'
import CustomersRegister from './pages/customers/Register'
import Home from './pages/Home'

const App = () => {
	return (
		<Router>
			<TemplateDefault>
				<Routes>
					<Route 
						path="/"
						element={<TemplatePage title="Inicial page" Component={Home}/>}
					/>
					<Route 
						path="/customers"
						element={<TemplatePage title="Customers list" Component={CustomersList}/>}
					/>
					<Route 
						path="/customers/add" 
						element={<TemplatePage title="Customers register" Component={CustomersRegister}/>}
					/>
				</Routes>
			</TemplateDefault>
		</Router>
	)
} 

export default App
