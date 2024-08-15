import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addToWishListData = createAsyncThunk(
  "WishList/addToWishListData",
  async (item, thunkAPI) => {
    try {
      // Simulating adding item to the cart from the fetched data
      // This will be the item from the 'allProducts' array
      return item;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to add item to the cart");
    }
  }
);

//remove from wishlist
export const removeFromWishlist = createAsyncThunk(
  "wishList/removeFromWishlist",
  async (item) => {
    try {
      return item;
    } catch {
      console.log("unable to remove");
    }
  }
);

const wishListSlice = createSlice({
  name: "WishList",
  initialState: {
    loading: false,
    allProducts: [],
    error: "",
  },

  extraReducers: (builder) => {
    //to add to cart
    //namukk oru arguemnt verum.that is eath card aano click cheythe aaa data edukaan vendi
    //ath eppolum action akth aayirikum indaka
    //evide state nammale initial state aanu
    builder.addCase(addToWishListData.fulfilled, (state, action) => {
      console.log("Payload received:", action.payload);
      state.allProducts.push(action.payload); // Add the item to the cart
      console.log("Updated state:", state); // Add the item to the cart
    });

    //remove from wishList

    builder.addCase(removeFromWishlist.fulfilled, (state, action) => {
      const itemIdToRemove = action.payload;
      state.allProducts = state.allProducts.filter(
        (item) => item.id != itemIdToRemove
      );
    });
  },
});

export default wishListSlice.reducer;
