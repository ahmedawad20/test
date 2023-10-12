/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';
import { Input } from '../shared/input/input.component';
import { Dispatch } from 'react';
import styles from './home.module.scss';
export const SearchForm = ({
	setName,
}: {
	setName: Dispatch<React.SetStateAction<string>>;
}) => {
	const { control, handleSubmit } = useForm();
	const onSubmit = (data: any) => {
		console.log('name', data.name);

		setName(data.name);
	};
	return (
		<>
			<div className='container mb-4'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={styles['form']}>
					<Input
						name='name'
						control={control}
						placeholder='Search...'
						className='mb-0'
					/>

					<button type='submit' className={styles['form__button']}>
						search
					</button>
				</form>
			</div>
		</>
	);
};
