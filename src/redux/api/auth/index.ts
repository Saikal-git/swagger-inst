import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation<AUTH.SignInResponse, AUTH.SignInRequest>({
      query: (data) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: data,
      }),
    }),
    signUp: build.mutation<AUTH.SignUpResponse, AUTH.SignUpRequest>({
      query: (data) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: data,
      }),
    }),
    getMe: build.query<AUTH.GetMeResponse, AUTH.GetMeRequest>({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
      providesTags: ["me"],
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useGetMeQuery } = api;
