import { client } from "./index.js";


export async function getMovieById(id) {
  console.log("getMovieById")
  return await client.db("b30wd").collection("movies").findOne({ "id": id });
}

export async function getUserByName(username) {
  
  return await client.db("b30wd").collection("users").findOne({ username : username});
}


export async function createMovies(data) {
  return await client.db("b30wd").collection("movies").insertMany(data);
}

export async function createUser(data) {
  return await client.db("b30wd").collection("users").insertOne(data);
}


export async function getAllMovies() {
  console.log("getAllmovies called")
  return await client.db("b30wd").collection("movies").find({}).toArray();
}


export async function deleteMovieById(id) {
  return await client.db("b30wd").collection("movies").deleteOne({ id: id });
}


export async function updateMovieById(id, updateData) {
  return await client.db("b30wd").collection("movies").updateOne({ id: id }, { $set: updateData });
}
