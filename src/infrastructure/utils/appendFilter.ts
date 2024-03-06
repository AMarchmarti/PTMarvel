export const appendFilter = ({
	url,
	filter,
}: {
	url: URL;
	filter: { [key: string]: any };
}) => {
	if (filter) {
		Object.keys(filter).forEach((key) => {
			if (
				filter[key] !== null &&
				filter[key] !== undefined &&
				filter[key] !== ""
			) {
				url.searchParams.append(key, filter[key].toString());
			}
		});
	}
	return url;
};
