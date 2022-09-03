import styled from 'styled-components'

const Box = styled.div`
   width: 100px;
   height: 100px;
   background-color: black;
`
const Rectangle = styled.section`
   margin: 20px;
   width: 350px;
   height: 200px;
   background-color: blue;
`
const Link = styled.a`
   color: white;
`

function Header() {
   return (
     <>
         <Box />
         <Rectangle>
            <Box />
            <Link href='http://www.disney.com.br'>Disney</Link>
         </Rectangle>
     </>
   )
 }
 
 export default Header
 