"use server";

import { UserRole } from "@/constants/enums";
import { mongoInit } from "@/lib/db/dbConfig";
import User from "@/models/user.model";

export const getAllTrainers = async () => {
    mongoInit()
  return await User.find({ role: UserRole.TRAINER });
};
