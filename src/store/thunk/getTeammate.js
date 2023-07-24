import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTeammate as getTeamMateApi } from '../../untils/mianApi';

export const getTeammate = createAsyncThunk(
	'teammate/get',
	async (payload, thunkAPI) => {
		try {
			const response = await getTeamMateApi(payload);
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
