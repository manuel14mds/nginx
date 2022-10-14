import express from 'express'

const app = express()
const PORT = process.env.PORT||8080
app.listen(PORT, ()=>console.log(`listening on ${PORT}`))

app.get('/',(req,res)=>{
    res.send(`Peticion tomada por ${process.pid} en el puerto: ${PORT}`)
})