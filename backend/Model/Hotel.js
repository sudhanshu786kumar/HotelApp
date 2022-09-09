const mongoose=require('mongoose');
const schema= mongoose.Schema;

const HotelSchema = new schema({
    name:{
        type:String,                 
        
    },
    data:{
        type:String,
      
    },
   addr:{
        type:String,
    },

    price:{
        type:String,
       
    },
    photo:{
        type:String
    }
    
   
})


module.exports=mongoose.model("HotelSchema",HotelSchema)