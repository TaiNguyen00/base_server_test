import mongoose from "mongoose";

const packageSchema = mongoose.Schema({
  name: {
    type: String
  },
  decsrip: {
    type: String
  },
  price: {
    type: Number,
    default: 0
  },
  codePackage: {
    type: String,
    default: "free"
  },
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]

})

export default mongoose.model("Package", packageSchema)