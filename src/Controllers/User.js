import User from "../Models/User"

export const newUser = async (req, res) => {
  const newUser = new User(req.body)
  try {
    const savedUser = await newUser.save()
    return res.status(200).json(savedUser)
  } catch (e) {
    console.log(e)
    return res.status(500).json(e)
  }
}