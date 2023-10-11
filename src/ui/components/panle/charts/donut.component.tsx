/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactApexChart from 'react-apexcharts';

interface Props {
	totalUs: number;
	totalUk: number;
	totalPl: number;
}
export const DonutChart: React.FC<Props> = ({ totalPl, totalUs, totalUk }) => {
	const state = {
		series: [totalUs, totalPl, totalUk],
		options: {
			chart: {
				type: 'donut',
				toolbar: {
					show: true,
				},
			},
			labels: [
				'United States Headlines',
				'Poland Headlines',
				'United Kingdom Headlines',
			],
			chartDataLabels: {
				enabled: false,
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							position: 'bottom',
						},
					},
				},
			],
		},
	} as any;

	return (
		<div className='panle__card'>
			<h3 className='panle__title'>Total Countries Headliens</h3>

			<ReactApexChart
				type='donut'
				options={state.options}
				series={state.series}
				width={'100%'}
				height={200}
			/>
		</div>
	);
};
