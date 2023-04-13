import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productServerApi } from '../sliceApi/productSliceApi'
import { categoryServerApi } from './categoryApi';

export const store = configureStore({
  reducer: {
    [productServerApi.reducerPath]: productServerApi.reducer,
    [categoryServerApi.reducerPath]: categoryServerApi.reducer
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productServerApi.middleware).concat(categoryServerApi.middleware),
})


setupListeners(store.dispatch)