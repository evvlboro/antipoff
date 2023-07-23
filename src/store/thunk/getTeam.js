import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTeam as getTeamApi } from '../../untils/mianApi';

export const getTeam = createAsyncThunk(
	'team/get',
	async (payload, thunkAPI) => {
		try {
			const response = await getTeamApi(payload);
			const data = await response.json();
			if (!response.ok) {
				throw new Error(JSON.stringify(data));
			}
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
