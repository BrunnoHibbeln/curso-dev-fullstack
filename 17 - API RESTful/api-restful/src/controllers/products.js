const ProductsModel = require('../models/products')

async function get(req, res) {
   const { id } = req.params
   const object = id ? { _id: id } : null

   const products = await ProductsModel.find(object)
   res.send(products)
}
async function post(req, res) {
   const {
      name,
      brand,
      price,
   } = req.body

   const product = new ProductsModel({
      name,
      brand,
      price,
   })
   
   product.save()

   res.send({
      message: 'success'
   })
}
async function put(req, res) {
   const { id } = req.params

   /* 
      const product = await ProductsModel.findById({ _id: id })
      await product.updateOne(req.body)
      
      res.send({
         message: 'Success',
         product,
      })
   */
      // Dessa forma acima funciona perfeitamente, mas caso seja necessario retornar o objeto atualizado, devemos fazer da seguinte maneira:
      
   // O primeiro parametro sera o "id", o segundo sera o valor que queremos alterar, e o terceiro e se queremos que a funcao retorne o valor atualizado
   const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

   res.send({
      message: 'success',
      product,
   })
}
async function remove(req, res) {
   const { id } = req.params

   const remove = await ProductsModel.deleteOne({ _id: id })

   if (remove.deletedCount == '0') {
      let message = 'error'
   } else (
      message  = 'success'
   )

   res.send({
      message
   })
}

module.exports = {
   get,
   post,
   put,
   remove,
}