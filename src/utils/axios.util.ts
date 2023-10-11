/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const instance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use(
	(config: any) => {
		if (typeof window) {
			config.headers = {
				'Accept-Language': '',
				...config.headers,
			};
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default instance;
