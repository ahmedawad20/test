import { useQuery } from '@tanstack/react-query';
import { getCategoryHeadlines } from '../api';

export const useCategoryHealines = (category: string) => {
	return useQuery(
		['headlines-category', category],
		() => getCategoryHeadlines(category),
		{
			refetchOnWindowFocus: false,
			retry: 0,
		}
	);
};
