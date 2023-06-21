const {Router}= require('express')
const clsMiddleware = require("../midelware/midleware")
const cls = require('cls-hooked')
const router = Router()
router.post('/check', [],async(req,res,next)=>{
    try {
        clsMiddleware(req,res,next)
        let clsNamespace = cls.getNamespace('app')
        console.log(clsNamespace)

        const traceID = clsNamespace.get('traceID')

        console.log("traceID", traceID)


        return res.status(200).json({message:"Успешно"})
    }catch (e){
        console.log("Error", e)
        return res.status(500).json({message:e})
    }
})


module.exports = router