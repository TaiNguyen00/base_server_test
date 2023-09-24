import Package from "../Models/Package";
import User from "../Models/User";

export const newPackage = async (req, res) => {
  const newPackage = new Package(req.body);
  try {
    const savedPackage = await newPackage.save();
    return res.status(200).json(savedPackage);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

export const testManagerPacker = async (req, res) => {
  return res.status(200).json("Gois chuwc nang");
};

// sau khi người dùng chọn gói mua hàng
export const updatePackageBuyByUser = async (req, res) => {
  const userID = req.params.id
  try {
    const updatedPackage =  await User.findByIdAndUpdate(userID, {$set: req.body}, {new: true})
    return res.status(200).json(updatedPackage)
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }

};

export const processProfessionalPackage = async(req, res) => {{
  return res.status(200).json("Gói chuyên nghiệp")
}}

