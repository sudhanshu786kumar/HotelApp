const mongoose=require('mongoose');
const schema= mongoose.Schema;

const BookedSchema = new schema({
    name:{
        type:String,                 
        
    },
    email:{
        type:String,
      
    },
  number:{
        type:String,
    },

   quant:{
        type:String,
       
    },
    hotel:{
        type:String
    }
    
    
   
})


module.exports=mongoose.model("BookedSchema",BookedSchema)