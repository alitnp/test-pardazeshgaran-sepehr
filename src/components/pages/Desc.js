import text from '../../constants/text.json';
import { Typography } from 'antd';
import ContentWrapper from '../global/ContentWapper';
import PageTitle from '../global/PageTitle';

const { Paragraph } = Typography;

const Desc = () => {
	return (
		<ContentWrapper>
			<PageTitle title='توضیحات' />
			<Paragraph>{text.description.body}</Paragraph>
			<Paragraph>{text.description.body}</Paragraph>
			<Paragraph>{text.description.body}</Paragraph>
		</ContentWrapper>
	);
};

export default Desc;
