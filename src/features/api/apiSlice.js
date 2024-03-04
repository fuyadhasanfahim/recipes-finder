import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://www.themealdb.com/api/json/v1/1",
    }),
    endpoints: (builder) => ({
        getMeals: builder.query({
            query: () => `/search.php?s`,
        }),

        getMeal: builder.query({
            query: (id) => `/lookup.php?i=${id}`,
        }),
    }),
});

export const { useGetMealsQuery, useGetMealQuery } = apiSlice;
