import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const BASE_URL = process.env.REACT_APP_BASE_URL;


export const categoryServerApi = createApi({
  reducerPath: 'categoryServerApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: ['Category'],
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => `/categories`,
      providesTags: ['Category'],
    }),
    createCategory: builder.mutation({
      query: (data) => ({
        url: `/categories`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Category']
    }),

    deleteCategory: builder.mutation({
        query:(id) => ({
          url: `/categories/${id}`,
          method: 'DELETE'
        }),
        invalidatesTags: ['Category']
      }),

    updateCategory: builder.mutation({ 
     query: function(data){
        return{
          url: `/categories/${data._id}`,
            method: 'PATCH',
            body: data,
        }
      },

      invalidatesTags: ['Category']
    }),
  
  }),
})
// })


export const {useGetCategoryQuery, useCreateCategoryMutation, useUpdateCategoryMutation,useDeleteCategoryMutation } = categoryServerApi


