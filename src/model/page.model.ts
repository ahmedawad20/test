export interface Page<T> {
	articles: T[];
	status: string;
	totalResults: number;
}
