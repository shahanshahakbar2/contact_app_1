// name,email,mobile,website,address,image,isActive,
const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  name:{
    type: String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    trim:true,
    unique:true
  },
  mobile:{
    type:String,
    required:true,
    trim:true,
    unique:true
  },
  website:{
    type:String,
    required:true,
    trim:true,
    unique:true
  },
  image:{
    type:String,
    required:true,
    trim:true,
    
  },
  address:{
    type:String,
    required:true,
    trim:true,
    
  },
  isActive:{
    type:Boolean,
    default:true,
    
  }
},{
  collection:"contact",
  timestamps: true
})

// one hold data type and second will hold collection

module.exports = mongoose.model("Contact",contactSchema)



