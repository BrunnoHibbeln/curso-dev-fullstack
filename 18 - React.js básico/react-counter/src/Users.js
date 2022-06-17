import React, { useState, useEffect } from 'react'

import Loading from './Loading'

const Users = () => {

	const [isLoading, setIsLoading] = useState(false)
	const [users, setUsers] = useState([])

	useEffect(() => {

		setIsLoading(true)

		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => {
				setUsers(data)
				setIsLoading(false)
			})
	}, [])

	return (
		<>
			<Loading visible={isLoading} />

			{
				users.map(user => {
					return (
						/* Para colocarmos sytle inline, devemos abrir a interpolação e passar um objeto*/
						<div style={{ margin: '20px 10px' }}>
							<b>Nome: </b> {user.name} <br />
							<b>Email: </b> {user.email} <br />
							<b>Telefone: </b> {user.phone} <br />
							<b>Site: </b> {user.website} <br />
							<hr />
						</div>
					)
				})
			}
		</>
	)
}

export default Users