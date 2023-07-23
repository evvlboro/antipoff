import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../untils/mianApi';

export const loginUser = createAsyncThunk(
	'user/login',
	async (payload, thunkAPI) => {
		try {
			const response = await login(payload);
			const data = await response.json();
			if (!response.ok) {
				throw new Error(JSON.stringify(data));
			}
			localStorage.setItem('token', data.token);

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
