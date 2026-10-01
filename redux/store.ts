import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
import projectReducer from "./slices/projectSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    project: projectReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
