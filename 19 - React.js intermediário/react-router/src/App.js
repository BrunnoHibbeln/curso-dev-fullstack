import React from 'react'
import {
	BrowserRouter as Router, Routes, Route
} from 'react-router-dom'

import Home from './pages/Home'
import Users from './pages/Users'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/users" element={<Users />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	)
}

export default App
