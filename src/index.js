import express from 'express'
import bodyParser from 'body-parser'
import { PORT } from './config/serverConfig.js'
import connectDB from './config/dbConfig.js'

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.text())


app.get('/',(req, res)=>{
    console.log('Welcome to the homepage');

    return res.json({
        name: 'Chander Shekhar'
    })
})

app.get('/about', (req,res)=>{
    console.log('Welcome to the about page');
    return res.json({
        name:'sunaina'
    })
})

app.post('/name', (req, res)=>{
  
    console.log(req.body.Fname)
    return res.json({
        message: 'Data has benn post'
    })
})


app.listen(PORT, async()=>{
    await connectDB()
    console.log(`Server is running at port ${PORT}`);
})

