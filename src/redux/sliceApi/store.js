import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productServerApi } from '../sliceApi/productSliceApi'
import { categoryServerApi } from './categoryApi';
import { reviewServerApi } from './reviewsApi';
export const store = configureStore({
  reducer: {
    [productServerApi.reducerPath]: productServerApi.reducer,
    [categoryServerApi.reducerPath]: categoryServerApi.reducer,
    [reviewServerApi.reducerPath] : reviewServerApi.reducer
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productServerApi.middleware).concat(categoryServerApi.middleware).concat(reviewServerApi.middleware),
})


setupListeners(store.dispatch)