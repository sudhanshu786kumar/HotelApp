const mongoose=require('mongoose');
const schema= mongoose.Schema;

const RoomModel = new schema({
    roomid:{
        type:String,                 
        
    },
    price:{
        type:Number,
      
    },
   capacity:{
        type:String,
    },

   features:{
        type:String,
       
    },
    photo:{
        type:String
    }
    
   
})


module.exports=mongoose.model("RoomModel",RoomModel)