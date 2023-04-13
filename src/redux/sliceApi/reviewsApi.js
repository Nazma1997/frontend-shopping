import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const BASE_URL = process.env.REACT_APP_BASE_URL;


export const reviewServerApi = createApi({
  reducerPath: 'reviewServerApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: ['Reviews'],
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => `/reviews`,
      providesTags: ['Reviews'],
    }),
    createReviews: builder.mutation({
      query: (data) => ({
        url: `/reviews`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Reviews']
    }),

    deleteReviews: builder.mutation({
        query:(id) => ({
          url: `/reviews/${id}`,
          method: 'DELETE'
        }),
        invalidatesTags: ['Reviews']
      }),

    updateReviews: builder.mutation({ 
     query: function(data){
        return{
          url: `/reviews/${data._id}`,
            method: 'PATCH',
            body: data,
        }
      },

      invalidatesTags: ['Reviews']
    }),
  
  }),
})
// })


export const {useGetReviewsQuery, useCreateReviewsMutation, useUpdateReviewsMutation,useDeleteReviewsMutation } = reviewServerApi


