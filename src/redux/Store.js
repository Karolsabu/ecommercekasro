import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartslice from "./CartSlice";

import WishlistSlice from "./WishlistSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//browser refresh chyumbo cartile data pokand irikan vendi persisitreducer use chyane
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  cart: cartslice,
  
  wishList: WishlistSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
});

export default store;
