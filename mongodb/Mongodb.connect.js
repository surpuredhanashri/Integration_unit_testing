const mongoose = require("mongoose");
 
async function connect(){
   try{
       await mongoose.connect("mongodb://127.0.0.1:27017/assignment3?directConnection=true&serverSelectionTimeoutMS=2000");
      
   }catch(err){
       console.log("Error happens in MongoDB: "+err);
   }
}
 module.exports= { connect };