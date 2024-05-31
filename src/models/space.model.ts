import mongoose from "mongoose";

const spaceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    }
  },
  {
    versionKey: false,
  }
);

const Space = mongoose.models.space || mongoose.model("space", spaceSchema);

export default Space;
