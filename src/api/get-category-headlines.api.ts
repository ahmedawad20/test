/* eslint-disable @typescript-eslint/no-explicit-any */
import { axios } from '../utils';

export const getCategoryHeadlines = async (category: string) => {
	try {
		const res = await axios.get(
			`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_API_URL}`
		);

		return res.data;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
