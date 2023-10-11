/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {
	FirstItemIcon,
	LastItemIcon,
	NextIcon,
	PreviousIcon,
} from '../../../icons';

interface Props {
	currentPage: number;
	pageCount: number;
	onPageChange: (e: { selectedPage: number }) => void;
}
export const Pagination: React.FC<Props> = ({
	pageCount,
	onPageChange,
	currentPage,
}) => {
	const [currentPageState, setCurrentPage] = useState(currentPage);
	const handleChange = (e: any) => {
		console.log('yuiop', e.selected);

		onPageChange({ selectedPage: e.selected + 1 });
		setCurrentPage(e.selected + 1);
	};
	const handleChangePageCount = (num: number) => {
		setCurrentPage(num);
	};

	useEffect(() => {
		if (currentPageState === pageCount || currentPageState === 1) {
			onPageChange({ selectedPage: currentPageState });
		}
	}, [currentPageState]);
	return (
		<div className='d-flex justify-content-center'>
			<div
				onClick={() => handleChangePageCount(1)}
				className='pagination-link pagination__first-item'>
				<FirstItemIcon />
			</div>
			<ReactPaginate
				nextLabel={<NextIcon />}
				onPageChange={handleChange}
				pageRangeDisplayed={1}
				marginPagesDisplayed={1}
				pageCount={pageCount}
				previousLabel={<PreviousIcon />}
				pageClassName='pagination-item'
				pageLinkClassName='pagination-link '
				previousClassName='pagination-item pagination__prevItem'
				previousLinkClassName='pagination-link pagination__prevLink'
				nextClassName='pagination-item pagination__nextItem '
				nextLinkClassName='pagination-link pagination__nextLink'
				breakLabel='...'
				breakClassName='pagination-item'
				breakLinkClassName='pagination-link pagination__breakLine'
				containerClassName='pagination'
				activeClassName='active'
				forcePage={currentPageState - 1}
			/>

			<div
				onClick={() => handleChangePageCount(pageCount)}
				className='pagination-link  pagination__last-item'>
				<LastItemIcon />
			</div>
		</div>
	);
};
