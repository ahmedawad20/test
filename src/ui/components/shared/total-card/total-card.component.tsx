interface Props {
	title: string;
	total: number;
}
export const TotalCard: React.FC<Props> = ({ title, total }) => {
	return (
		<div className='panle__card'>
			<h2 className='panle__title'>{title}</h2>
			<p className='panle__text'>{total}</p>
		</div>
	);
};
