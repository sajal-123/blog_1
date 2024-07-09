import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the user information structure
interface User {
    _id: string;
    avatar: string;
    name: string;
    email: string;
    admin: boolean;
    verified: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface UserState {
    userInfo: User | null;
}
const userInfoFromStorage = localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account')!) : null

const UserinitialState: UserState = {
    userInfo: userInfoFromStorage,
};

const userSlice = createSlice({
    name: 'user',
    initialState: UserinitialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.userInfo = action.payload;
        },
        clearUserData: (state) => {
            state.userInfo = null;
        },
    },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
