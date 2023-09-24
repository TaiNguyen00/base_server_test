import express from "express"
import { login } from "../Controllers/Auth"


const router = express.Router()

router.post("/login", login)

module.exports = router