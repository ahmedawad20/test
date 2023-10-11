/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactApexChart from 'react-apexcharts';

interface Props {
	totalBuesiness: number;
	totalEntertaiment: number;
	totalTechnology: number;
}
export const BubbleChart: React.FC<Props> = ({
	totalBuesiness,
	totalEntertaiment,
	totalTechnology,
}) => {
	const generateData = (baseval: any, count: any, yrange: any) => {
		var i = 0;
		var series = [];
		while (i < count) {
			var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
			var y =
				Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
				yrange.min;
			var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

			series.push([x, y, z]);
			baseval += 86400000;
			i++;
		}
		return series;
	};

	const state = {
		series: [
			{
				name: 'Business Headlines',
				data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
					min: 10,
					max: totalBuesiness,
				}),
			},
			{
				name: 'EnterTainment Headlines',
				data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
					min: 10,
					max: totalEntertaiment,
				}),
			},
			{
				name: 'Technology Headlines',
				data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
					min: 10,
					max: totalTechnology,
				}),
			},
		],
		options: {
			chart: {
				height: 250,
				type: 'bubble',
			},
			dataLabels: {
				enabled: false,
			},
			fill: {
				opacity: 0.8,
			},

			xaxis: {
				tickAmount: 12,
				type: 'category',
			},
			yaxis: {
				max: 70,
			},
		},
	} as any;

	return (
		<div className='panle__card'>
			<h3 className='panle__title'>Total Categories Headlines</h3>

			<ReactApexChart
				type='bubble'
				options={state.options}
				series={state.series}
				width={'100%'}
				height={250}
			/>
		</div>
	);
};
