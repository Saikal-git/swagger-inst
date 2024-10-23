"use client";
import {
  useCreatePostMutation,
  useUploadImageMutation,
} from "@/redux/api/post";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const ImageUploader = () => {
  const [createPostMutation] = useCreatePostMutation();
  const [uploadImage] = useUploadImageMutation();
  const { register, handleSubmit, reset } = useForm<ICreatePost>();

  // Handle file input change

  // Handle image upload
  const handleUpload: SubmitHandler<ICreatePost> = async (data) => {
    const file = data.file![0];
    const formData = new FormData();
    formData.append("file", file);
    const { data: responseImage } = await uploadImage(formData);
    console.log("🚀responseImage:", responseImage);
    const newPost: ICreatePost = {
      caption: data.caption,
      mediaType: data.mediaType,
      mediaUrl: responseImage?.url,
    };
    const { data: post } = await createPostMutation(newPost);
    console.log("🚀  data:", post);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleUpload)}>
        <input type="file" {...register("file", { required: true })} />
        <input
          type="text"
          placeholder="Caption"
          {...register("caption", { required: true })}
        />
        <input
          defaultValue={"PHOTO"}
          type="text"
          placeholder="media type"
          {...register("mediaType", { required: true })}
        />

        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
};

export default ImageUploader;
