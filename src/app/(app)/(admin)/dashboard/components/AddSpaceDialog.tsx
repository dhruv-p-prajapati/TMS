"use client";

import Input from "@/components/custom/Input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { useState } from "react";
import { createSpace, validateSlug } from "@/actions/spaces";
import { useToast } from "@/components/ui/use-toast";
import { uploadFile } from "@/lib/utils";

const ACCEPTED_IMAGE_TYPES: string[] = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const addSpaceFormSchema = z.object({
  spaceName: z
    .string()
    .trim()
    .min(2, "Space name should be of at least of two characters")
    .max(50)
    .regex(/^[^-]*$/, "Hyphen is not allowed!"),
  file: z
    .instanceof(File)
    .optional()
    .refine((file: File) => {
      return ACCEPTED_IMAGE_TYPES.includes(file?.type);
    }, "File type must be a PNG, JPG, JPEG or WEBP"),
});

export function AddSpaceDialog({ children }: { children: React.ReactNode }) {
  const { toast } = useToast();
  const [open, setOpen] = useState<Boolean>(false);
  const [previewSpaceImg, setPreviewSpaceImg] = useState<string>("");

  const form = useForm<z.infer<typeof addSpaceFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(addSpaceFormSchema),
  });

  const onSubmit = async (data: z.infer<typeof addSpaceFormSchema>) => {
    const { success, slug } = await validateSlug(data.spaceName);

    console.log({ success, slug });

    if (!success) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Space already exists!",
      });
      // form.reset();
      return;
    }

    // upload image
    const spaceImgURL = await uploadFile(data.file);
    console.log(spaceImgURL);

    const res = await createSpace(data.spaceName, spaceImgURL, slug);

    if (!res.success) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: res.message,
      });

      return;
    }

    toast({
      description: res.message,
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new space</DialogTitle>
          <DialogDescription>
            Create a new Space and click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="spaceName"
              render={({ field }) => (
                <FormItem>
                  <Input
                    type="text"
                    label="Space"
                    placeholder="React JS"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="file"
                      placeholder="Upload file"
                      label="Space Image"
                      ref={field.ref}
                      onChange={(e) => {
                        setPreviewSpaceImg(
                          URL.createObjectURL(e?.target?.files[0])
                        );
                        field.onChange(
                          e.target.files ? e.target.files[0] : undefined
                        );
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {previewSpaceImg && (
              <div className="relative size-28 rounded overflow-hidden">
                <Image
                  src={previewSpaceImg}
                  alt={"Preview Image"}
                  className="object-contain"
                  layout="fill"
                />
              </div>
            )}

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
