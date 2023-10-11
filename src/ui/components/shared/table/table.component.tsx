/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import { Pagination } from '..';

interface Props {
	cols: string[];
	renderTableRowElement: (data: any, index: number) => ReactNode;
	data: any[];
	totalCount?: number;
	currentPage?: number;
	pageCount?: number;
	limit?: number;
	hasPagination?: boolean;
	onPageChange?: (page: { selectedPage: number }) => void;
}

export const Table: React.FC<Props> = ({
	cols,
	renderTableRowElement,
	data,
	totalCount,
	currentPage,
	pageCount,
	limit,
	onPageChange,
	hasPagination = true,
}) => {
	const renderRangeLabel = ({
		currentPage,
		totalCount,
		limit,
	}: {
		currentPage: number;
		totalCount: number;
		limit: number;
	}) => {
		return `${currentPage > 1 ? (currentPage - 1) * limit + 1 : 1} To ${
			currentPage === pageCount ? totalCount : currentPage * limit
		} From ${totalCount}`;
	};
	const _table = () => {
		return (
			<>
				<div className={'table__wrapper'}>
					<table className={'table'}>
						<thead className={'table__header'}>
							<tr className={'table__header-row'}>
								{cols.map((col, index) => (
									<th
										className={'table__header-head'}
										key={index}>
										{col}
									</th>
								))}
							</tr>
						</thead>
						<tbody className='table__body'>
							{data.map((item, index) => (
								<tr
									className={`table__body-row ${
										index % 2 !== 0
											? 'table__body-row--light'
											: ''
									}`.trim()}
									key={item.id}>
									{renderTableRowElement(item, item.id)}
								</tr>
							))}
						</tbody>
					</table>
				</div>
				{hasPagination && currentPage && totalCount && limit ? (
					<div className='table__footer'>
						<p className='table__footer-text'>
							{renderRangeLabel({
								currentPage,
								totalCount,
								limit,
							})}
						</p>

						{/* pagination */}
						<div>
							<Pagination
								currentPage={currentPage!}
								pageCount={pageCount!}
								onPageChange={onPageChange!}
							/>
						</div>
					</div>
				) : null}
			</>
		);
	};

	return (
		<>
			{data?.length !== 0 ? (
				_table()
			) : (
				<div className={'table__wrapper'}>
					{/* <NoData title={'لا يوجد بيانات في الجدول'} /> */}
				</div>
			)}
		</>
	);
};
