import { Typography } from 'antd';
const { Title } = Typography;

const PageTitle = ({ title }) => {
	return (
		<div className='pb-4 mb-4 border-b'>
			<Title level={4}>{title}</Title>
		</div>
	);
};

export default PageTitle;
