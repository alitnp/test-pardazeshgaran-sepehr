import axios from 'axios';

const remove = async (url, params) => {
	let error;

	const data = await axios
		.delete(url, {
			params: params,
			data: params,
		})
		.then((res) => res)
		.catch((err) => {
			error = err.response;
		});

	return { data, error };
};

export default remove;
