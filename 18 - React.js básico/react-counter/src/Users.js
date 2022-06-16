import React, { useState, useEffect } from 'react'

const Users = () => {

    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <h1>Users</h1>

            { loading === true ? 'Carregando...' : ''}

            {
                users.map(user => {
                    return (
                    /* Para colocarmos sytle inline, devemos abrir a interpolação e passar um objeto */
                        <div style={{margin: '20px 10px'}}>
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