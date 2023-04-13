import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const BASE_URL = process.env.REACT_APP_BASE_URL;


export const productServerApi = createApi({
  reducerPath: 'productServerApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => `/products`,
      providesTags: ['Product'],
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: `/products`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Product']
    }),

    deleteProduct: builder.mutation({
        query:(id) => ({
          url: `/products/${id}`,
          method: 'DELETE'
        }),
        invalidatesTags: ['Product']
      }),

    updateProduct: builder.mutation({ 
     query: function(data){
        return{
          url: `/products/${data._id}`,
            method: 'PATCH',
            body: data,
        }
      },

      invalidatesTags: ['Product']
    }),
  
  }),
})
// })


export const {useGetProductQuery, useCreateProductMutation, useUpdateProductMutation,useDeleteProductMutation } = productServerApi


