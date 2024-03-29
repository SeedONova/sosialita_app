import * as dotenv from 'dotenv'
dotenv.config();

import express from 'express'
import { json, urlencoded } from 'body-parser'
import mongoose from 'mongoose'

const app = express()

app.use(urlencoded({
    extended: false
}))

app.use(json())
console.log('MONGO_URI:', process.env.MONGO_URI);

const start = async () => {
    if(!process.env.MONGO_URI) throw new Error('MONGO_URI is required!')

    try{
        await mongoose.connect(process.env.MONGO_URI);
    } catch(err){
        console.error('Database connection error:', err);
        throw new Error('database error!')
    }

    app.listen(3000, () => console.log('server is up and running on port 3000'))
}

start();