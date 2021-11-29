import { Button, Input, InputNumber, DatePicker } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import endpoints from '../../constants/endpoints';
import useUrlParams from '../../hooks/useUrlParams';
import ContentWrapper from '../global/ContentWapper';
import PageTitle from '../global/PageTitle';
import get from '../../services/get';
import Loading from '../global/Loading';
import moment from 'moment';
import FormWrapper from '../global/FormWrapper';
import update from '../../services/update';
import create from '../../services/create';

const CarEditAddForm = ({ add = false }) => {
	const [carDetail, setCarDetail] = useState();
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const { id } = useUrlParams();

	useEffect(() => {
		const getCarDetail = async (id) => {
			const result = await get(endpoints.cars, { id });
			if (result.data) setCarDetail(result.data.data[0]);
		};

		id && !add && getCarDetail(id);
	}, [id, add]);

	const dateFormat = 'yyyy-MM-DD';

	const handleUpdate = async () => {
		setLoading(true);
		const result = await update(endpoints.cars + '/' + carDetail.id, {
			...carDetail,
			updatedAt: moment().toISOString(),
		});
		setLoading(false);
		if (result.data) setSuccess(true);
	};
	const handleAdd = async () => {
		setLoading(true);
		const result = await create(endpoints.cars, {
			...carDetail,
			updatedAt: moment().toISOString(),
		});
		setLoading(false);
		if (result.data) setSuccess(true);
	};

	if (!carDetail && !add) return <Loading />;

	return (
		<ContentWrapper>
			<PageTitle title='ویرایش خودرو' />

			<FormWrapper>
				<div className='flex items-center'>
					<label className='ml-2 whitespace-nowrap' htmlFor='tipID'>
						tipID :
					</label>
					<InputNumber
						name='tipID'
						id='tipID'
						value={carDetail?.tipID}
						onChange={(e) => setCarDetail({ ...carDetail, tipID: e })}
						maxLength={4}
						style={{ width: '100%' }}
					/>
				</div>
				<div className='flex items-center'>
					<label className='ml-2 whitespace-nowrap' htmlFor='tip'>
						tip :
					</label>
					<Input
						name='tip'
						value={carDetail?.tip}
						onChange={(e) =>
							setCarDetail({ ...carDetail, tip: e.target.value })
						}
					/>
				</div>
				<div className='flex items-center'>
					<label className='ml-2 whitespace-nowrap' htmlFor='systemID'>
						systemID :
					</label>
					<InputNumber
						name='systemID'
						value={carDetail?.systemID}
						onChange={(e) => setCarDetail({ ...carDetail, systemID: e })}
						maxLength={4}
						style={{ width: '100%' }}
					/>
				</div>
				<div className='flex items-center'>
					<label className='ml-2 whitespace-nowrap' htmlFor='brandID'>
						brandID :
					</label>
					<InputNumber
						name='brandID'
						value={carDetail?.brandID}
						onChange={(e) => setCarDetail({ ...carDetail, brandID: e })}
						maxLength={4}
						style={{ width: '100%' }}
					/>
				</div>
				<div className='flex items-center'>
					<label className='ml-2 whitespace-nowrap' htmlFor='brand'>
						brand :
					</label>
					<Input
						name='brand'
						value={carDetail?.brand}
						onChange={(e) =>
							setCarDetail({ ...carDetail, brand: e.target.value })
						}
					/>
				</div>
				<div className='flex items-center'>
					<label className='ml-2 whitespace-nowrap' htmlFor='noeVasilehID'>
						noeVasilehID :
					</label>
					<InputNumber
						name='noeVasilehID'
						value={carDetail?.noeVasilehID}
						onChange={(e) => setCarDetail({ ...carDetail, noeVasilehID: e })}
						maxLength={4}
						style={{ width: '100%' }}
					/>
				</div>
				<div className='flex items-center'>
					<label className='ml-2 whitespace-nowrap' htmlFor='zarfiat'>
						zarfiat :
					</label>
					<InputNumber
						name='zarfiat'
						value={carDetail?.zarfiat}
						onChange={(e) => setCarDetail({ ...carDetail, zarfiat: e })}
						maxLength={4}
						style={{ width: '100%' }}
					/>
				</div>
				<div className='flex items-center'>
					<label className='ml-2 whitespace-nowrap' htmlFor='createdAt'>
						createdAt :
					</label>
					<DatePicker
						defaultValue={moment(carDetail?.createdAt)}
						format={dateFormat}
						allowClear={false}
						onChange={(e) =>
							setCarDetail({ ...carDetail, createdAt: e.toISOString() })
						}
					/>
				</div>
			</FormWrapper>

			<div className='flex justify-between mt-6'>
				<p>
					{loading && 'درحال پردازش'}
					{success && 'عملیات موفقیت آمیز بود.'}
				</p>
				<div>
					<Link to='/cars' className='ml-4'>
						<Button>بازگشت</Button>
					</Link>
					<Button onClick={add ? handleAdd : handleUpdate}>
						{add ? 'ثبت' : 'ثبت تغییرات'}
					</Button>
				</div>
			</div>
		</ContentWrapper>
	);
};

export default CarEditAddForm;
