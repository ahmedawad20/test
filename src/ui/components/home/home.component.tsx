/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { New, Page } from 'model';

import {
	useReactTable,
	flexRender,
	getCoreRowModel,
} from '@tanstack/react-table';

import { Pagination } from '..';
import { dateFormat } from '../../../utils';
import { useMemo } from 'react';
import { Details } from './details.component';

interface Props {
	news: Page<New>;
	currentPage: number;
	isLoading: boolean;
	onPageChange: (page: { selectedPage: number }) => void;
}

export const HomeComponent: React.FC<Props> = ({
	news,
	currentPage,
	isLoading,
	onPageChange,
}) => {
	const columns = useMemo(
		() => [
			{
				header: 'Source name',
				accessorFn: (row: New) => `${row.source.name}`,
			},
			{
				header: 'title',
				accessorFn: (row: New) => `${row.title}`,
			},
			{
				header: 'Publication date',
				accessorFn: (row: New) => `${dateFormat(row.publishedAt)}`,
			},
			{
				// accessor: 'author',
				header: 'Details',
				accessorFn: (row: New) => row,

				cell: (props: any) => <Details news={props.getValue()} />,
			},
		],
		[]
	);

	const { getHeaderGroups, getRowModel } = useReactTable({
		columns,
		data: news?.articles || [],
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className='container'>
			{isLoading ? (
				<>...loading</>
			) : (
				<>
					{news?.articles ? (
						<div className='table__card'>
							<table>
								<thead>
									{getHeaderGroups().map((headerEl) => (
										<tr key={headerEl.id}>
											{headerEl.headers.map((column) => (
												<th
													key={column.id}
													colSpan={column.colSpan}>
													{flexRender(
														column.column.columnDef
															.header,
														column.getContext()
													)}
												</th>
											))}
										</tr>
									))}
								</thead>
								<tbody>
									{getRowModel().rows.map((rowEl) => (
										<tr key={rowEl.id}>
											{rowEl
												.getVisibleCells()
												.map((cellEL) => (
													<td key={cellEL.id}>
														{flexRender(
															cellEL.column
																.columnDef.cell,
															cellEL.getContext()
														)}
													</td>
												))}
										</tr>
									))}
								</tbody>
							</table>

							<Pagination
								currentPage={currentPage}
								onPageChange={onPageChange}
								pageCount={Math.ceil(news.totalResults / 20)}
							/>
						</div>
					) : (
						<>no Data</>
					)}
				</>
			)}
		</div>
	);
};
