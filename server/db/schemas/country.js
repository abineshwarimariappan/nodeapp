var mongoose=require('mongoose');
var country=mongoose.model('countrymodel',new mongoose.Schema({
    code:String,
    name:String,
    continent:String,
    capital:String,
    population:String
}),'country');
module.exports=country;