import express from "express";
import {MongoClient} from "mongodb";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import {moviesRouter} from "./routes/movies.js"
import {usersRouter} from "./routes/users.js"



const app =  express();


//middleware --> intercept --> converting body to json

app.use(express.json()); 

app.use(cors())

app.use("/movies",moviesRouter)

app.use("/users",usersRouter)

// const MONGO_URL = "mongodb://localhost";

const MONGO_URL = process.env.MONGO_URL;



async function createConnection(){
   const client =  new MongoClient(MONGO_URL);
   await client.connect()
  console.log("Mongo is connected")
  return client;
}

export const client = await createConnection();

//GET METHOD  - read 

// find gives cursor - cursor means  pagination 
//to convert into array we have toArray (method) to array gives everything.


app.get('/', function (req, res) { 

  res.send('Hello Pugalenthi💥❤')

})




const PORT = process.env.PORT;

app.listen(PORT,()=> console.log("server is started in port 4000"));







