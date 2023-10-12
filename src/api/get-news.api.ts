/* eslint-disable @typescript-eslint/no-explicit-any */
import { axios, createQueryString } from '../utils';

interface Props {
	page?: number;
	pageSize?: number;
	q?: string;
}
export const getNews = async (body: Props) => {
	const params = createQueryString(body);
	try {
		const res = await axios.get(
			`https://newsapi.org/v2/everything?&sortBy=popularity&apiKey=${
				import.meta.env.VITE_API_URL
			}&${params}`
		);

		return res.data;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
