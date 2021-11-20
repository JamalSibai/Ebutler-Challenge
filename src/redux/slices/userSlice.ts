import { createSlice } from "@reduxjs/toolkit";

export interface User {
  userProfile?: {
    uid?: string;
    email?: string;
    Name?: string;
    UserType: string;
    profileImage?: string;
    token?: string;
  };
  editingProfile?: {
    edited: string;
  };
}

const initialState: User = {
  userProfile: null,
  editingProfile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserProfile(state, action) {
      state.userProfile = action.payload.userProfile;
    },

    updateEditingProfile(state, action) {
      state.editingProfile = action.payload.editingProfile;
    },
  },
});

export const { updateUserProfile, updateEditingProfile } = userSlice.actions;
export default userSlice.reducer;
