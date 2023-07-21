import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user';

const rootReducer = combineReducers({
    user: userSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});
