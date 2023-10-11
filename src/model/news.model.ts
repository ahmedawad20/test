export interface New {
	source: Source;
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
}

interface Source {
	id: null | string;
	name: string;
}
