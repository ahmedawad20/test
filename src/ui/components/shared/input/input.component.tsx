/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, Controller } from 'react-hook-form';
import styles from './input.module.scss';

import { useState } from 'react';
interface Props {
	name: string;
	control: Control;
	label?: string;
	placeholder?: string;
	type?: string;
	error?: any;
	rules?: any;
	required?: boolean;
	className?: string;
	inputClassName?: string;
}

export const Input: React.FC<Props> = ({
	name,
	control,
	label,
	placeholder,
	type = 'string',
	rules = {},
	error,
	required,
	className,
	inputClassName,
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const [inputType, setInputType] = useState(type);

	const _renderSuffix = () => {
		let content;

		return content ? <div className={styles.suffix}>{content}</div> : null;
	};
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={''}
			rules={{
				...rules,
				validate: {
					...(required
						? {
								required: (value: string | number) => {
									if (typeof value === 'string') {
										if (value?.trim() !== '') {
											return true;
										}
									} else if (value) {
										return true;
									}

									return 'Requried';
								},
						  }
						: {}),
					...rules?.validate,
				},
			}}
			render={({ field }) => (
				<>
					<div
						className={`${styles['input__wrapper']} ${
							className ? className : ''
						}`}>
						{label ? (
							<label
								htmlFor={name}
								className={`${styles['input__label']} ${
									required
										? styles['input__label--required']
										: ''
								}`.trim()}>
								{label}
							</label>
						) : null}
						{inputType === 'textarea' ? (
							<textarea
								id={name}
								placeholder={placeholder ? placeholder : label}
								className={`${styles['textarea']} ${
									error ? styles['textarea--error'] : ''
								}`.trim()}
								{...field}
							/>
						) : (
							<div className='w-100 position-relative'>
								<input
									type={inputType}
									id={name}
									placeholder={
										placeholder ? placeholder : label
									}
									className={`${styles['input']}  ${
										type == 'checkbox'
											? styles['input__checkbox-type']
											: ''
									} ${
										error ? styles['input--error'] : ''
									}`.trim()}
									{...field}
								/>

								<div className={styles['input__icon']}>
									{_renderSuffix()}
								</div>
							</div>
						)}

						{error ? (
							<span className={styles['input__error-message']}>
								{error.message}
							</span>
						) : null}
					</div>
				</>
			)}
		/>
	);
};
