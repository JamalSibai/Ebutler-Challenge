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
  freelancerSearch?: {
    date?: string;
    category?: string;
    region?: string;
    longitude?: string;
    latitude?: string;
  };
  message_id?: {
    user_id: number;
    image: string;
    name: string;
  };
  appointmentDate?: {
    date: string;
  };
  editingProfile?: {
    edited: string;
  };
  DoneFreelancer?: {
    Done: string;
  };
  changeDate?: {
    change: string;
  };
}

const initialState: User = {
  userProfile: null,
  freelancerSearch: null,
  message_id: null,
  appointmentDate: null,
  editingProfile: null,
  changeDate: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      console.log("adding user object  ", action.payload);
      return action.payload;
    },
    deleteUser() {
      return initialState;
    },
    updateUserProfile(state, action) {
      state.userProfile = action.payload.userProfile;
    },
    updateFreelancerSearch(state, action) {
      state.freelancerSearch = action.payload.freelancerSearch;
    },
    updateMessage_id(state, action) {
      state.message_id = action.payload.message_id;
    },
    updateAppointmentDate(state, action) {
      state.appointmentDate = action.payload.appointmentDate;
    },
    updateEditingProfile(state, action) {
      state.editingProfile = action.payload.editingProfile;
    },
    updateDoneFreelancer(state, action) {
      state.DoneFreelancer = action.payload.DoneFreelancer;
    },
    updateChangeDate(state, action) {
      state.changeDate = action.payload.changeDate;
    },
  },
});

export const {
  addUser,
  deleteUser,
  updateUserProfile,
  updateFreelancerSearch,
  updateMessage_id,
  updateAppointmentDate,
  updateEditingProfile,
  updateDoneFreelancer,
  updateChangeDate,
} = userSlice.actions;
export default userSlice.reducer;
