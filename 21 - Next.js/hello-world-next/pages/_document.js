import { 
   Html, 
   Head, 
   Main, 
   NextScript,
} from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
         <meta charSet='UTF-8'></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document