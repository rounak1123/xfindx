

//components
import User from "../model/User.js";



export const addUser = async (request, response)=>{
   try{ 
    console.log(request.body);


    User.findOne({googleId: request.body.googleId}, (err, res)=>{
   if(res) 
   return  response.status(200).json({
       message: 'user already added.'
       });
       const user = new User(request.body);
       user.save();
      console.log("addUser working");
      response.status(200).json({
          status: 200,
          message: 'add request successfully executed.'
    });


   
    });} catch( err) {
        console.log("Error occured while calling api.",err);
        return response.status(500).json(err);
    
    }
}

export const updateUser = async (request, response)=>{
    try{ 
    //  console.log(request.body);
 
 
     User.findOneAndUpdate({googleId: request.body.googleId}, {highScore: request.body.highScore},(err, res)=>{
    if(res) 
   
      return response.status(200).json({
           status: 200,
           message: 'update request successfully executed.'
     });
 
 
    
     });} catch( err) {
         console.log("Error occured while calling api.",err);
         return response.status(500).json(err);
     
     }
 }


export const getUsers = async (request, response)=>{
    try{ 
     console.log(request.body);
 
 
     User.find({}, (err, res)=>{
    if(res) 
    return  response.status(200).json({
        message: 'user fetched',
        data: res
        });
     });} catch( err) {
         console.log("Error occured while calling api.",err);
         return response.status(500).json(err);
     
     }
 }

 export const getHighScore = async (request, response)=>{
    try{ 
     console.log(request.body);
 
 
     User.find({googleId: request.body.googleId}, (err, res)=>{
    if(res){
        console.log(res);
        return  response.status(200).json({
            message: 'user fetched',
            data: res,
            });
    } 
   
     });
    } catch( err) {
         console.log("Error occured while calling api.",err);
         return response.status(500).json(err);
     
     }
 }