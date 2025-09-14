import express   from "express"
import cors      from "cors"
const app= express()
app.use(cors())
app.listen(3000,()=>{
    console.log("Server Ingexus funcionando en Terminal")
})

app.get("/",(req,res)=>{
res.send("Server Ingexus funcionando http://localhost:3000/")
})

