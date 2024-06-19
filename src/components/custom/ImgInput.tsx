"use client";

import { uploadFile } from "@/lib/utils";

const ImgInput = () => {
  return (
    <>
      <input
        type="file"
        onChange={async (e: any) => await uploadFile(e?.target?.files[0])}
        placeholder="upload image"
      />
    </>
  );
};

export default ImgInput;
