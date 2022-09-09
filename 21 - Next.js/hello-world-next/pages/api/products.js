const teste = (req, res) => {
   
   if (req.method !== 'POST') { 
      res.status(404)
   }

   res.status(200)
}

export default teste