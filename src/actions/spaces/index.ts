"use server";

import { mongoInit } from "@/lib/db/dbConfig";
import Space from "@/models/space.model";

export const getAllSpaces = async () => {
  mongoInit();
  const spaces = await Space.find();
  return spaces;
};
