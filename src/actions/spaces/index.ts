"use server";

import { addSpaceFormSchema } from "@/app/(app)/(admin)/dashboard/components/AddSpaceDialog";
import { UserRole } from "@/constants/enums";
import { mongoInit } from "@/lib/db/dbConfig";
import { generateSlug } from "@/lib/utils";
import Space from "@/models/space.model";
import User from "@/models/user.model";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const getAllSpaces = async () => {
  mongoInit();
  const spaces = await Space.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "space",
        as: "spaceMembers",
      },
    },
  ]);

  return spaces;
};

export const getNumberOfTrainerAndTrainees = async (
  spaceId: mongoose.Schema.Types.ObjectId
) => {
  mongoInit();

  const trainees = await User.find({ space: spaceId, role: UserRole.TRAINEE });
  const trainers = await User.find({ space: spaceId, role: UserRole.TRAINER });

  return {
    trainees: trainees.length || 0,
    trainers: trainers.length || 0,
  };
};

export const validateSlug = async (spaceName: string) => {
  mongoInit();
  const slug = generateSlug(spaceName);

  const isSpaceExist = await Space.findOne({ slug });

  if (isSpaceExist) {
    return {
      success: false,
      slug: null,
    };
  }

  return {
    success: true,
    slug,
  };
};

export const createSpace = async (
  spaceName: string,
  image: string,
  slug: string | null
) => {
  try {
    const newSpace = new Space({
      name: spaceName,
      image,
      slug,
    });

    await newSpace.save();

    return {
      success: true,
      message: "Space created successfully!",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong while creating space",
    };
  } finally {
    revalidatePath("/dashboard");
  }
};
