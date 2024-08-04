import express,{Request,Response} from 'express'
import cors from "cors";

const app=express()
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req:Request,res:Response):Response=>{
    return res.status(201).json({msg:"Server is Live!!🚀"})
})


const port: number = Number(5000)

app.listen(port,()=>{
    console.log(`Server is up and Running at http://localhost:${port}`)
})
