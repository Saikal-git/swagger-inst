import { api as index } from "..";
import { BaseQueryFn } from "@reduxjs/toolkit/query/react";

interface UploadImageResponse {
  url: string;
  message: string;
}

type UploadImageRequest = FormData;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    uploadImage: build.mutation<UploadImageResponse, UploadImageRequest>({
      query: (formData) => ({
        url: "/upload/file",
        method: "POST",
        body: formData,
      }),
    }),
    createPost: build.mutation<POST.CreatePostResponse, POST.CreatePostRequest>(
      {
        query: (data) => ({
          url: "/post/create",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["post"],
      }
    ),
  }),
});

export const { useUploadImageMutation, useCreatePostMutation } = api;
