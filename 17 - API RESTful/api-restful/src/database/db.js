const mongoose = require('mongoose')

function connect() {

   main().catch(err => console.log(err));

   async function main() {
      await mongoose.connect('mongodb://localhost:27017/api-restful');
   }
}

module.exports = {
   connect
}