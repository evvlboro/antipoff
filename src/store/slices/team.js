import { createSlice } from '@reduxjs/toolkit';
import { getTeam } from '../thunk/getTeam';
import { getTeammate } from '../thunk/getTeammate';

const teamSlice = createSlice({
    name: 'team',
    initialState: {
        isLoading: '',
        errorMessage: '',
        data: []
    },
    reducers: {
        clearData(state) {
            return {
                ...state,
                data: []
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTeam.pending, (state) => ({
            ...state,
            isLoading: true,
        }));
        builder.addCase(getTeam.fulfilled, (state, action) => ({
            ...state,
            data: [
                ...state.data,
                ...action.payload.data
            ],
            isLoading: false,
            errorMessage: '',
        }));
        builder.addCase(getTeam.rejected, (state, action) => ({
            ...state,
            isLoading: false,
            errorMessage: action.payload,
        }));
        builder.addCase(getTeammate.pending, (state) => ({
            ...state,
            isLoading: true,
        }));
        builder.addCase(getTeammate.fulfilled, (state, action) => ({
            ...state,
            data: [
                ...state.data,
                action.payload.data
            ],
            isLoading: false,
            errorMessage: '',
        }));
        builder.addCase(getTeammate.rejected, (state, action) => ({
            ...state,
            isLoading: false,
            errorMessage: action.payload,
        }));
    }
});

export default teamSlice.reducer;

export const { clearData } = teamSlice.actions;