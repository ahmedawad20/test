import { useState } from 'react';
import { useGetNews } from '../hooks';
import { HomeComponent } from '../ui/components';

export const HomeHOC = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const { data, isLoading } = useGetNews({
		page: currentPage,
		pageSize: 20,
	});

	const onPageChange = (page: { selectedPage: number }) => {
		setCurrentPage(page.selectedPage);
	};

	console.log({ data, isLoading });

	return (
		<HomeComponent
			news={data}
			onPageChange={onPageChange}
			currentPage={currentPage}
			isLoading={isLoading}
		/>
	);
};
