import { useQuery } from '@tanstack/react-query';
import { getCountryHeadlines } from '../api/get-country-headlines.api';

export const useCountyHealines = (country: string) => {
	return useQuery(
		['headlines', country],
		() => getCountryHeadlines(country),
		{
			refetchOnWindowFocus: false,
			retry: 0,
		}
	);
};
