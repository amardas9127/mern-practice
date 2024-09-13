import express from 'express';
import dotenv from "dotenv"
import connectDB from './db/connectDB.js';
import {createDoc, allDoc,getDoc,singleDoc, countDoc, sortDoc,updateDocs,updateManyDocs,deleteDocs} from './models/Movies.js';

dotenv.config()
const DATABASE_URL = process.env.MONGO_URI
const app = express();
const port = process.env.PORT || 8000;
console.log(port);
connectDB(DATABASE_URL)

//create document
//createDoc()

//retrive all the data
// allDoc()

//retriving specific type
// getDoc()


//retriving a single document using the id
// singleDoc()

//count the no of documents
// countDoc()


//sorting the documents
// sortDoc()

//update the data
// updateDocs()

//update all the documents
// updateManyDocs()

//delete by id
deleteDocs()


app.get("/", (req,res) =>{
    res.send("HOME")
})









app.listen(port, ()=>{
    console.log(`Server Listening at port ${port}`);
})
