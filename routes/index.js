import express from "express";
const router= express.Router()
import controllerusers from '../controller/usercontroller1.js'


router.get('/user',controllerusers.getalldoc )
router.get('/user/:id',controllerusers.getsingledocbyid)
router.post('/user',controllerusers.createdoc)
router.put('/user/:id',controllerusers.updatedocbyid)
router.delete('/user/:id',controllerusers.deletedocbyid)
export default router