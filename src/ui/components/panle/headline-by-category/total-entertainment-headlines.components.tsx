import { TotalCard } from '../../../../ui/components';

export const TotalEntertainmentHeadlines = ({
	totalEntertaiment,
}: {
	totalEntertaiment: number;
}) => {
	return (
		<TotalCard
			title='Total EnterTainment Headlines'
			total={totalEntertaiment}
		/>
	);
};
