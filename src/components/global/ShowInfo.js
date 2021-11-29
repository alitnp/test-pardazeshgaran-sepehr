const ShowInfo = ({ left, right }) => {
	return (
		<div className='flex items-center'>
			<p className='text-gray-400'>{right + ' : '}</p>
			<p className='mr-2 text-lg'>{left}</p>
		</div>
	);
};

export default ShowInfo;
