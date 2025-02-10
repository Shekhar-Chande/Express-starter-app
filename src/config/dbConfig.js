import mongoose from 'mongoose'
import {DB_URL} from './serverConfig.js'

export default async function connectDB(){
    try{
        await mongoose.connect(DB_URL)
        console.log("Successfully connect to the DB Server.......");
    }
    catch(e){
        console.log("Not Connected");
        console.log(e);
    }
}