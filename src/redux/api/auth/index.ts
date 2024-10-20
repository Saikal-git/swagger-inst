import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation<AUTH.SignInResponse, AUTH.SignInRequest>({
      query: () => ({
        url: "/auth/sign-in",
        method: "POST",
      }),
    }),
    signUp: build.mutation<AUTH.SignUpResponse, AUTH.SignUpRequest>({
      query: () => ({
        url: "/auth/sign-up",
        method: "POST",
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
