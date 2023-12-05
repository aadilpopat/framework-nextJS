const FragmentBuilder = (
	query: string,
	fragments: Array<() => string> = []
) => {
	const requestQuery: string[] = [];
	requestQuery.push(query);
	fragments.forEach((fragment) => {
		requestQuery.push(fragment());
	});

	return requestQuery.join(' ');
};

export default FragmentBuilder;
