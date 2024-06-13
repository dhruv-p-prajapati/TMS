"use server";

import { UserRole } from "@/constants/enums";
import { mongoInit } from "@/lib/db/dbConfig";
import User from "@/models/user.model";

export const getAllTrainees = async () => {
    mongoInit()
  return await User.find({ role: UserRole.TRAINEE });
};
