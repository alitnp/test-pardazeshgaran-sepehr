import ContentWrapper from '../global/ContentWapper';
import PageTitle from '../global/PageTitle';
import CarsTable from '../cars/CarsTable';

const Cars = () => {
	return (
		<ContentWrapper>
			<PageTitle title='لیست خودرو ها' />
			<CarsTable />
		</ContentWrapper>
	);
};

export default Cars;
