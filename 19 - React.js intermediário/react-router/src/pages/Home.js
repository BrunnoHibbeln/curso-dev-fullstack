import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
   return (
      <>
         <h1>Inicial Page</h1>
         <ul>
            <li>
               <Link to="/users">Users</Link>
            </li>
         </ul>
      </>
   )
}

export default Home