const {Router}= require('express')
const clsMiddleware = require("../midelware/midleware")
const cls = require('cls-hooked')
const router = Router()
router.post('/check',async(req,res)=>{
    try {
        let clsNamespace = cls.getNamespace('app')
        const getId =  clsNamespace.get('traceID1');
        console.log(getId)

        //return res.status(200).json({message:"Успешно"})
    }catch (e){
        console.log("Error", e)
        //return res.status(500).json({message:e})
        next()
    }
})


module.exports = router