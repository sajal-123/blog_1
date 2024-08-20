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

export interface UserState {
    userInfo: User | null;
    loginInfo: boolean
}
const userInfoFromStorage = localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account')!) : null

const UserinitialState: UserState = {
    userInfo: userInfoFromStorage,
    loginInfo: userInfoFromStorage !== null

};

const userSlice = createSlice({
    name: 'user',
    initialState: UserinitialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.userInfo = action.payload;
            state.loginInfo = true;
            localStorage.setItem('account', JSON.stringify(state.userInfo));

        },
        clearUserData: (state) => {
            state.userInfo = null;
            state.loginInfo = false;
            localStorage.removeItem('account');
        },
    },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
