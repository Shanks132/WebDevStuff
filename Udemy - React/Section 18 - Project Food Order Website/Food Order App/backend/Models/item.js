// eslint-disable-next-line no-undef
const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    foodPic:{type:String,default:"KhayaliPulavPic"},
    foodName:{type:String,default:"KhayaliPulav"},
    price: {type:Number,default:1},
    description:{type:String,default:"KhayaliPulavKeBareMe10MarkAnswer"},

    
  }
);

// eslint-disable-next-line no-undef
module.exports = mongoose.model("Item",itemSchema);