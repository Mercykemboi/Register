var  express = require("express");
    router     = express.Router();
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.json();
var formencoded=bodyParser.urlencoded({extended : true})
const Register=require('../models/register');


router.get("/",function(request,response){
    response.render("index")
})
router.get("/edit/:id",function(request,response){
    var id=request.params.id
    response.render("edit",{id:id})

})

router.post('/addRegister',urlencodedParser,formencoded,function(request,response){
    console.log(request.body)
var data={
    registerName:request.body.registerName,
    registerEmail:request.body.registerEmail,
    registerCourse:request.body.registerCourse,
    registerPassword:request.body.registerPassword,}
    
 

Register.create(data,function(error,register
    ){

        if(error){
            console.log(error)
            
        }
        else{
            console.log(register)
            response.redirect   ("/")
        }

})

})
router.get("/getRegisters",function(request,response){
    console.log(request.body)
    Register.find({},function(error,register){
        if(error){
            console.log(error)
        }
        else{
            console.log(register)
            response.render("showRegisters",{registers:register})
        }
    })

    
})
router.get("/getregisterbyId/:id",function(request,response){
   var id=request.params.id
    Register.findOne({_id:id},function(error,register){
        if(error){
            console.log(error) 
        }
        else{
            console.log(register)
            response.render("showRegister",{registerDetails:register})
        }
    })

    
})
router.post("/updateregisterbyId",function(request,response){
    var id=request.body.id
       Register.findByIdAndUpdate({ _id:id},
        {
            registerName:request.body.registerName,
            registerEmail:request.body.registerEmail,
            registerCourse:request.body.registerCourse,
            registerPassword:request.body.registerPassword,

            
        
        }
        ,function(error,register){
        if(error){
            console.log(error)
        }
        else{
            console.log(register)
            response.redirect("/getRegisters")
}
    })


   
})

router.get("/deleteregister/:id",function(request,response){
    var id=request.params.id
    Register.deleteOne({_id:id},function(error,register){
        if(error){
            console.log(error)
        }else{
            console.log(register)
            response.redirect("showRegisters")
        }
    })
})

module.exports = router;