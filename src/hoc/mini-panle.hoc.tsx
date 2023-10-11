import { useCategoryHealines, useCountyHealines } from '../hooks';
import {
	BubbleChart,
	DonutChart,
	TotaUKHeadlines,
	TotalBusinessHeadlines,
	TotalEntertainmentHeadlines,
	TotalPolandHeadlines,
	TotalTechnologyHeadlines,
	TotalUSHeadlines,
} from '../ui/components';

export const PanleHOC = () => {
	const { data: usData } = useCountyHealines('us');
	const { data: ukData } = useCountyHealines('uk');
	const { data: plData } = useCountyHealines('pl');
	const { data: businessData } = useCategoryHealines('business');
	const { data: entertainmentData } = useCategoryHealines('entertainment');
	const { data: technologyData } = useCategoryHealines('technology');

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-lg-6'>
					<DonutChart
						totalUs={usData?.totalResults || 0}
						totalUk={ukData?.totalResults || 0}
						totalPl={plData?.totalResults || 0}
					/>
					<BubbleChart
						totalBuesiness={businessData?.totalResults || 0}
						totalEntertaiment={entertainmentData?.totalResults || 0}
						totalTechnology={technologyData?.totalResults || 0}
					/>
				</div>
				<div className='col-lg-3'>
					<TotalBusinessHeadlines
						totalBuesiness={businessData?.totalResults || 0}
					/>
					<TotalEntertainmentHeadlines
						totalEntertaiment={entertainmentData?.totalResults || 0}
					/>
					<TotalTechnologyHeadlines
						totalTechnology={entertainmentData?.totalResults || 0}
					/>
				</div>
				<div className='col-lg-3'>
					<TotalUSHeadlines total={usData?.totalResults || 0} />
					<TotalPolandHeadlines total={plData?.totalResults || 0} />
					<TotaUKHeadlines total={ukData?.totalResults || 0} />
				</div>
			</div>
		</div>
	);
};
