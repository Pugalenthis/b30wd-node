import {createUser,getUserByName} from "../helper.js";
import express from "express";
import bcrypt from "bcrypt";


const router = express.Router()

async function  genPassword(password){
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt)
    console.log(salt,hashPassword)
    return hashPassword;

}

  
  router.post("/signup",async  (req,res)=>{  
  
    const {username,password} = req.body;

    const hashPassword = await genPassword(password)
    
    const newUser = {
        username : username,
        password : hashPassword
    }
    const result = await createUser(newUser);
    res.send(result);
  
  })

  router.post("/login",async  (req,res)=>{  
  
    const {username,password} = req.body;
     //db.user.findOne({username : "tamil"})
    const userFromDb = await getUserByName(username)
     console.log(userFromDb)

     if(!userFromDb){
         res.status(401).send("Invalid Credentials")
     }
     else{
        const storedPassword = userFromDb.password
        const isPasswordMatch = await bcrypt.compare(password,storedPassword)

        console.log(isPasswordMatch)

        if(isPasswordMatch){
            res.send("Successfully login")
        }
        else{
            res.status(401).send("Invalid Credentials")
        }
        // res.send(userFromDb)
     }
       
  })
  
  

  export const usersRouter = router;



