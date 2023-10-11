import dayjs from 'dayjs';

export const dateFormat = (
	date: string | Date = new Date(),
	format: string = 'MM/YYYY',
	locale?: string
) => {
	return dayjs(date)
		.locale(locale || 'en')
		.format(format);
};
