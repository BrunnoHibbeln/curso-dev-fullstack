import React, { useState, useEffect } from 'react'

const Albums = () => {

    const [loading, setLoading] = useState(false)
    const [albums, setAlbums] = useState([])

    useEffect(() => {

        setLoading(true)

        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(data => {
                setAlbums(data)
                setLoading(false)
            })
    },[])

    return (
        <>
            <h1>Albums</h1>

            { loading === true ? 'Carregando...' : ''}

            {
                albums.map(album => {
                    return (
                        <div>
                            <span>{album.title} - id: {album.id}</span>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Albums