import { useState } from 'react';
import { useGetNews } from '../hooks';
import { HomeComponent } from '../ui/components';
import { SearchForm } from '../ui/components/home/search-from.component';

export const HomeHOC = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [name, setName] = useState('');
	const { data, isLoading } = useGetNews({
		page: currentPage,
		pageSize: 20,
		q: name || 'tesla',
	});

	const onPageChange = (page: { selectedPage: number }) => {
		setCurrentPage(page.selectedPage);
	};

	console.log({ data, isLoading });

	return (
		<>
			<SearchForm setName={setName} />
			<HomeComponent
				news={data}
				onPageChange={onPageChange}
				currentPage={currentPage}
				isLoading={isLoading}
			/>
		</>
	);
};
