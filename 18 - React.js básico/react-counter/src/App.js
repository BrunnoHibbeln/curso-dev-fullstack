import React, { useState } from 'react'

import Template from './Template'
import Albums from './Albums'
import Counter from './Counter'
import Users from './Users'

const defaultPage = 'albums'

const pages = {
	albums: {
		text: 'Albums',
		component: Albums
	},
	counter: {
		text: 'Counter',
		component: Counter
	},
	Users: {
		text: 'Users',
		component: Users
	}
}

function App() {

	const [page, setPage] = useState(defaultPage)

	const handleChangePage = (page) => {
		setPage(page)
	}

	// 'Page'irá receber o componente
	const Page = pages[page].component

	return (
		<Template pages={pages} activePage={page} onChangePage={handleChangePage}>
			{/* 
				Renderizar o componente somente se ele existir. Se a instrução der 'true' então o 'Page' é renderizado, se der 'false' não renderiza.
			*/}
			{Page && <Page />}
		</Template>
	);
}

export default App;
