export const concatApiKey = (path: URL) => {
	path.searchParams.append("apikey", import.meta.env.VITE_API_KEY);
	return path.href;
};
