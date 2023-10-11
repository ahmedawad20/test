import { TotalCard } from '../../../../ui/components';

export const TotalTechnologyHeadlines = ({
	totalTechnology,
}: {
	totalTechnology: number;
}) => {
	return (
		<TotalCard title='Total Technology Headlines' total={totalTechnology} />
	);
};
