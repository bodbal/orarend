import express from "express"
import  * as orarendControllers from "../controllers/controller.js"

const router =express.Router()

router.get('/', orarendControllers.getOrarend)
router.get('/:id', orarendControllers.getOrarendById)
router.post('/', orarendControllers.createOrarend)
router.put('/:id',orarendControllers.updateOrarend)
router.delete('/:id', orarendControllers.deleteOrarend)

export default router