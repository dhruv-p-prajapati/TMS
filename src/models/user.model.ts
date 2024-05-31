import { UserRole } from "@/utils/enums";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: UserRole.TRAINEE,
    },
    space: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "space",
      default : "6659b014580fba583f243883"
    },
    publishedTopic: {
      type: [String],
      default: [],
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const User = mongoose.models.user || mongoose.model("user", userSchema);
// const User = mongoose.model("user", userSchema);

export default User;
