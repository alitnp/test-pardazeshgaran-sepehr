import axios from 'axios';

const create = async (url, params = {}) => {
	let error;

	const data = await axios
		.post(
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

export default create;
