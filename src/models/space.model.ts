import { ISpace } from "@/types";
import mongoose from "mongoose";

const spaceSchema: mongoose.Schema<ISpace> = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    slug: {
      type: String,
    },
    image: {
      type: String,
    },
    spaceLead: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      default: null,
    },
  },
  {
    versionKey: false,
  }
);

const Space =
  (mongoose.models.space as mongoose.Model<ISpace>) ||
  mongoose.model<ISpace>("space", spaceSchema);

export default Space;