const cls = require('cls-hooked')
const uuidv4 = require('uuid')



const clsMiddleware = (req, res, next) => {

    const clsNamespace = cls.createNamespace('app')
    // req и res - это event emitters. Мы хотим иметь доступ к CLS контексту внутри их коллбеков
    clsNamespace.bindEmitter(req)
    clsNamespace.bindEmitter(res)

    const traceID = uuidv4.v4()

    clsNamespace.run(() => {
        clsNamespace.set('traceID1', traceID)
        next()

    })

}


module.exports = clsMiddleware