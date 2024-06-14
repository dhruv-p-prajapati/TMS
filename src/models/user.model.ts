import { UserRole } from "@/constants/enums";
import { IUser } from "@/types";
import mongoose from "mongoose";

const userSchema: mongoose.Schema<IUser> = new mongoose.Schema(
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
    isLead: {
      type: Boolean,
      default: false,
    },
    space: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "space",
      default: null,
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

const User =
  (mongoose.models.user as mongoose.Model<IUser>) ||
  mongoose.model<IUser>("user", userSchema);
export default User;
