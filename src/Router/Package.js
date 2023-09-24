import express from "express"
import { newPackage, testManagerPacker, updatePackageBuyByUser, processProfessionalPackage } from "../Controllers/Package"

import { vefiryPackage, verifyAdmin, verifyToken } from "../utils/middleware"

const router = express.Router()

router.post("/", verifyAdmin ,newPackage)
router.put("/updatePackage/:id", verifyToken, updatePackageBuyByUser)
router.post("/test",vefiryPackage("rest"),testManagerPacker)

router.get("/getPackage", vefiryPackage("N-01"), processProfessionalPackage)

module.exports = router