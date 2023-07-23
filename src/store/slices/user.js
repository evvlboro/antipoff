import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from '../thunk/registerUser';
import { loginUser } from '../thunk/loginUser';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: 0,
        name: '',
        email: '',
        token: '',
        isLoading: '',
        errorMessage: '',
        registerSuccess: false,
        requestCounter: 0,
        isAuthenticated: false,
    },
    reducers: {
        autoLoginUser(state) {
            return {
                ...state,
                isAuthenticated: true,
                errorMessage: ''
            }
        },
        logoutUser(state) {
            localStorage.removeItem('token');

            return {
                ...state,
                isAuthenticated: false,
                errorMessage: ''
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => ({
            ...state,
            isLoading: true,
        }));
        builder.addCase(registerUser.fulfilled, (state, action) => ({
            ...state,
            ...action.payload,
            isLoading: false,
            registerSuccess: true,
            errorMessage: '',
            requestCounter: state.requestCounter + 1,
        }));
        builder.addCase(registerUser.rejected, (state, action) => ({
            ...state,
            isLoading: false,
            errorMessage: action.payload,
            registerSuccess: false,
            requestCounter: state.requestCounter + 1,
        }));
        builder.addCase(loginUser.pending, (state) => ({
            ...state,
            isLoading: true,
        }));
        builder.addCase(loginUser.fulfilled, (state, action) => ({
            ...state,
            ...action.payload,
            isLoading: false,
            isAuthenticated: true,
            errorMessage: '',
            requestCounter: state.requestCounter + 1,
        }));
        builder.addCase(loginUser.rejected, (state, action) => ({
            ...state,
            isLoading: false,
            errorMessage: action.payload,
            isAuthenticated: false,
            requestCounter: state.requestCounter + 1,
        }));
    }
});

export default userSlice.reducer;

export const { autoLoginUser, logoutUser } = userSlice.actions;