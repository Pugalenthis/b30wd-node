import {getMovieById , createMovies , updateMovieById , deleteMovieById , getAllMovies} from "../helper.js";
import express from "express";

const router = express.Router()
router.get("/", async (req,res)=> {
  
    const movie = await getAllMovies();
    res.send(movie)
    
    console.log(movie)
  
  })
  
  
  router.get("/:id", async (req,res)=> {
  
    //db.movies.findOne({"id" : "102"})
    const {id} = req.params; 
  
    const movie = await getMovieById(id)
  
    console.log(movie)
    movie ? res.send(movie) : res.status(404).send("No such movie found 😥")
  })
  
  
  //POST METHOD; - create
  
  router.post("/",async  (req,res)=>{  
  
    const data = req.body;
    console.log(data)
    const result = await createMovies(data);
    res.send(result);
  
  })
  
  
  
  //Delete method; - update 
  
  // db.movies.deleteMany(); -deletes all movies 
  
  //deleting movie by id.
  
  
  router.delete("/:id", async (req,res)=> {
  
    //db.movies.findOne({"id" : "102"})
    const {id} = req.params; 
    const result = await deleteMovieById(id)
    res.send(result);
  
  })
  
  
  // Edit movie by id;
  
  
  router.put("/:id", async (req,res)=> {
  
    //db.movies.updateOne({id : "102"},{$set : updateData})
    const {id} = req.params;
    const updateData = req.body
  
    console.log(updateData)
  
    const result = await updateMovieById(id, updateData)
    res.send(result);
    
  })
  
  export const moviesRouter = router;