/* eslint-disable @typescript-eslint/no-explicit-any */
import { axios } from '../utils';

export const getCountryHeadlines = async (country: string) => {
	try {
		const res = await axios.get(
			`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${import.meta.env.VITE_API_URL}`
		);

		return res.data;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
