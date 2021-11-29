import axios from 'axios';

const update = async (url, params = {}) => {
	let error;

	const data = await axios
		.put(
			url,
			{ ...params },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
		.then((res) => res)
		.catch((err) => {
			error = err.response;
		});

	return { data, error };
};

export default update;
