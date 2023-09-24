import express from "express"
import { newUser } from "../Controllers/User"

const router = express.Router()

router.post("/", newUser)

module.exports = router