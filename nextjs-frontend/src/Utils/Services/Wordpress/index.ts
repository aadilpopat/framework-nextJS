import { cache } from 'react';
import JsonObject from '@/Utils/CustomTypes/JsonObject';
import IFetchAPIOptions from '@/Utils/Services/Wordpress/IFetchAPIOptions';

const API_URL = process.env.WORDPRESS_API_URL;

const dedupedFetch = cache(
	async (serializedInit: RequestInit): Promise<JsonObject> => {
		const response = await fetch(API_URL!, serializedInit);

		try {
			const responseData: JsonObject =
				(await response.json()) as JsonObject;
			return responseData.data as JsonObject;
		} catch {
			if (!response.ok) {
				throw new Error(
					`${response.status} ${
						response.statusText
					}: ${await response.json()}`
				);
			}
			throw new Error('Something went wrong!!!');
		}
	}
);

const fetchAPI = async <T>(
	query: string,
	options: Partial<IFetchAPIOptions> = {
		variables: {},
		revalidate: false,
	}
): Promise<T> => {
	const requestParams: RequestInit = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			...(process.env.WORDPRESS_AUTH_REFRESH_TOKEN
				? {
						Authorization: `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`,
				  }
				: {}),
		},
		body: JSON.stringify({
			query,
			variables: options.variables,
			revalidate: options.revalidate,
		}),
		next: { revalidate: options.revalidate },
	};

	return (await dedupedFetch(requestParams)) as T;
};

export default fetchAPI;
