
var mongoose=require("mongoose");
var registerSchema=new mongoose.Schema({
registerName:String,
registerEmail:String,
registerCourse:String,
registerPassword:String,
createdAt   : {
    type      : Date,
    default   : Date.now()
  },
  updatedAt   :  {
    type      : Date,
    default   : Date.now()
  },
});

module.exports=mongoose.model("register1",registerSchema)
