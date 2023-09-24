import User from "../Models/User"
import jwt from "jsonwebtoken"
  export const login =  async (req, res) =>{
  try {

    const user = await User.findOne({username: req.body.username})

    if (!user) return res.status(403).json("User not found")
    if (req.body.password !== user.password) return res.status(403).json("Wrong password")

    const token = jwt.sign({
      _id: user._id, role: user.role, package: user.package},
      process.env.JWT_TOKEN_SECRET  
    )

    const {password, ...othersDetails} = user._doc;

    return res
    .cookie("access_token", token, {
      httpOnly: true,
    })
    .status(200)
    .json(user)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
  }