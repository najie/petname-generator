import small from '$lib/db/small.json';

export const ssr = false;

export function load() {
	return {
		small
	}
}