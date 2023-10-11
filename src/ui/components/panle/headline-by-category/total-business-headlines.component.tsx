import { TotalCard } from '../../../../ui/components';

export const TotalBusinessHeadlines = ({
	totalBuesiness,
}: {
	totalBuesiness: number;
}) => {
	return (
		<TotalCard title='Total Business Headlines' total={totalBuesiness} />
	);
};
