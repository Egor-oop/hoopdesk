import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface UserState {
  user: TUserData | null
}

const initialState: UserState = {
  user: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<TUserData>) => {
      state.user = action.payload
    },
    logoutUser: (state) => {
      state.user = null
    }
  }
})

export const { loginUser, logoutUser } = userSlice.actions
export const selectUser = (state: RootState) => state.user.user

export default userSlice.reducer
