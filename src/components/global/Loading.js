import { LoadingOutlined } from '@ant-design/icons';

const Loading = () => {
	return (
		<div className='w-40 p-6 mx-auto'>
			<span className='ml-4'>درحال پردازش</span>
			<LoadingOutlined spin />
		</div>
	);
};

export default Loading;
