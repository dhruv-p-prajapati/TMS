import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextRequest } from "next/server";
import { PrivateRoutes, PublicRoutes } from "../constants/routes";
import { UserRole } from "../constants/enums";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hasAccessToURL = async (req: NextRequest, role: UserRole) => {
  if (PublicRoutes.includes(req.nextUrl.pathname)) return true;
  const accessibleRoute = PrivateRoutes[role];
  return accessibleRoute.includes(req.nextUrl.pathname);
};

export const uploadFile = async (file) => {
  const Bucket = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME;
  const s3 = new S3Client({
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
    },
  });

  if (!file) console.log("please choose file");
  const fileName = Date.now() + file.name;
  try {
    const uploadToS3 = new PutObjectCommand({
      Bucket,
      Key: fileName,
      Body: file,
    });
    const res = await s3.send(uploadToS3);
    const url = process.env.NEXT_PUBLIC_IMAGE_BASEURL + fileName;
    console.log({url});
    return url
  } catch (error) {
    console.error(error);
    return error;
  }
};
