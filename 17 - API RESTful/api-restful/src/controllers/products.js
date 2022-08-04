const ProductsModel = require('../models/products')

async function get(req, res) {
   const { id } = req.params

   const object = id ? { _id: id } : null

   const products = await ProductsModel.find(object)

   res.send(products)
}

module.exports = {
   get,
}