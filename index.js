const express = require("express")

const app = express()
app.use(express.json({extended:true}))
app.use('/api/main',require('./midelware/midleware'))
app.use('/api/main',require('./routes/main.route'))

const PORT = 5000

async function start(){
    try{

        app.listen(PORT, ()=> console.log('App has been started on port',PORT))
    }catch(e){
        console.log('Server error',e.message)
        process.exit(1)
    }
}

start()
