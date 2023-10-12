import { useQuery } from '@tanstack/react-query';
import { getNews } from '../api';

interface Props {
	page: number;
	pageSize: number;
	q: string;
}

export const useGetNews = (body: Props) => {
	return useQuery(['news', { ...body }], () => getNews(body), {
		refetchOnWindowFocus: false,
		retry: 0,
	});
};
