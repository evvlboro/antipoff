import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user';
import teamSlice from './slices/team';

const rootReducer = combineReducers({
    user: userSlice,
    team: teamSlice
});

export const store = configureStore({
    reducer: rootReducer,
});
