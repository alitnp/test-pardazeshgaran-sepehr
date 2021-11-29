import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import endpoints from '../../constants/endpoints';
import useUrlParams from '../../hooks/useUrlParams';
import get from '../../services/get';
import ContentWrapper from '../global/ContentWapper';
import Loading from '../global/Loading';
import PageTitle from '../global/PageTitle';
import ShowInfo from '../global/ShowInfo';

const CarDetail = (props) => {
	const [carDetail, setCarDetail] = useState();

	const { id } = useUrlParams();

	useEffect(() => {
		const getCarDetail = async (id) => {
			const result = await get(endpoints.cars, { id });
			if (result.data) setCarDetail(result.data.data[0]);
		};

		id && getCarDetail(id);
	}, [id]);

	if (!carDetail) return <Loading />;

	return (
		<ContentWrapper>
			<PageTitle title='اطلاعات خودرو' />
			{Object.keys(carDetail).map((key) => (
				<ShowInfo right={key} left={carDetail[key]} key={key} />
			))}
			<div className='flex justify-end mt-6'>
				<Link to='/cars'>
					<Button>بازگشت</Button>
				</Link>
				<Link to={`/cars/edit?id=${carDetail.id}`} className='mr-4'>
					<Button>ویرایش</Button>
				</Link>
			</div>
		</ContentWrapper>
	);
};

export default CarDetail;
