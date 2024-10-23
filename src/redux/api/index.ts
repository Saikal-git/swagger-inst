import {
  BaseQueryFn,
  fetchBaseQuery,
  createApi,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
  prepareHeaders: (headers: Headers) => {
    const tokens = localStorage.getItem("tokens");

    if (tokens) {
      const parsedTokens = JSON.parse(tokens);
      headers.set("Authorization", `Bearer ${parsedTokens.accessToken}`);
    }

    return headers;
  },
});

const baseQueryExtended: BaseQueryFn = async (arqs, api, extraOptions) => {
  const result = await baseQuery(arqs, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnFocus: false,
  refetchOnReconnect: false,
  tagTypes: ["auth", "me", "post"],
  endpoints: () => ({}),
});
