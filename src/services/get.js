import axios from 'axios';

const get = async (url, params = {}) => {
	let error;

	const data = await axios
		.get(url, {
			params,
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then((res) => res)
		.catch((err) => {
			error = err.response;
		});

	return { data, error };
};

export default get;
