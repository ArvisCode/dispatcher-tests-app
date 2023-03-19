import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./authAPI";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { currentUser } from "./sliceUser";
import { currentToken } from "./sliceToken";
import { tasksApi } from "./taskApi";

const tokenPersistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [tasksApi.reducerPath]: tasksApi.reducer,
  token: currentToken.reducer,
  userName: currentUser.reducer,
});

const persistedReducer = persistReducer(tokenPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(authApi.middleware)
      .concat(tasksApi.middleware),
});

export const persistor = persistStore(store);
