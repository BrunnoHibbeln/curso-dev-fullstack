import Link from 'next/link'

const Index = () => {
   return (
      <div>
         <h1>Hello world</h1>
         {/* 
            Um link como normalmente fariamos: 

               <a href="/about"></a>

            Dessa maneira se torna muito custosa, pois a pagina ira carregar novamente. Uma forma muito melhor e utilizar o <Link>
            do proprio next:
         */}

         <Link href="/about">
            <a>About page</a>
         </Link>

         <Link href="/category/products">
            <a>Products page</a>
         </Link>
      </div>
   )
}

export default Index

