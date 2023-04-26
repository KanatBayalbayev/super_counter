import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  isSettingsDisplayed: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    reset(state) {
        state.value = 0
    },
    displaySettings(state) {
      state.isSettingsDisplayed = !state.isSettingsDisplayed;
    },
    setCount(state, action) {
        state.value = action.payload
    }
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
