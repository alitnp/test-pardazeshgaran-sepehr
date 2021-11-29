import { Button, DatePicker, Input, InputNumber } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import endpoints from '../../constants/endpoints';
import useUrlParams from '../../hooks/useUrlParams';
import ContentWrapper from '../global/ContentWapper';
import PageTitle from '../global/PageTitle';
import get from '../../services/get';
import Loading from '../global/Loading';
import moment from 'moment';

const EditCar = () => {
	const [carDetail, setCarDetail] = useState();

	const { id } = useUrlParams();

	useEffect(() => {
		const getCarDetail = async (id) => {
			const result = await get(endpoints.cars, { id });
			if (result.data) setCarDetail(result.data.data[0]);
		};

		id && getCarDetail(id);
	}, [id]);

	const dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";

	if (!carDetail) return <Loading />;

	return (
		<ContentWrapper>
			<PageTitle title='ویرایش خودرو' />
			<form action=''>
				<InputNumber
					name='tipID'
					value={carDetail.tipID}
					onChange={(e) => setCarDetail({ ...carDetail, tipID: e })}
					maxLength={4}
				/>
				<Input
					name='tip'
					value={carDetail.tip}
					onChange={(e) => setCarDetail({ ...carDetail, tip: e })}
				/>
				<InputNumber
					name='systemID'
					value={carDetail.systemID}
					onChange={(e) => setCarDetail({ ...carDetail, systemID: e })}
					maxLength={4}
				/>

				<InputNumber
					name='brandID'
					value={carDetail.brandID}
					onChange={(e) => setCarDetail({ ...carDetail, brandID: e })}
					maxLength={4}
				/>
				<Input
					name='brand'
					value={carDetail.brand}
					onChange={(e) => setCarDetail({ ...carDetail, brand: e })}
				/>
				<InputNumber
					name='noeVasilehID'
					value={carDetail.noeVasilehID}
					onChange={(e) => setCarDetail({ ...carDetail, noeVasilehID: e })}
					maxLength={4}
				/>
				<InputNumber
					name='zarfiat'
					value={carDetail.zarfiat}
					onChange={(e) => setCarDetail({ ...carDetail, zarfiat: e })}
					maxLength={4}
				/>
				<DatePicker
					defaultValue={moment('2015/01/01', dateFormat)}
					format={dateFormat}
					allowClear={false}
					onChange={(e) => console.log(e)}
				/>
			</form>
			<div className='flex justify-end mt-6'>
				<Link to='/cars' className='ml-4'>
					<Button>بازگشت</Button>
				</Link>

				<Button>ثبت تغییرات</Button>
			</div>
		</ContentWrapper>
	);
};

export default EditCar;
