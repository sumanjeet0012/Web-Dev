import express, { request, response } from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/BookModels.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000/',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));

app.use('/books',booksRoute)

app.get("/", (request,response)=> {
    console.log(request)
    return response.status(234).send('Welcome to MERN stack project')
});

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`App is  listening at port: ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error)
    })