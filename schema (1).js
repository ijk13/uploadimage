  
let mongoose  = require("./config (1)");
mongoose = mongoose.mongoose
const nstoreSchema = new mongoose.Schema({brand: String, product:String,price:String,unit:String,productImage:String});
const nstore = mongoose.model('store', nstoreSchema);
module.exports.nstore = nstore;