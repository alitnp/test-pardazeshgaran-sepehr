import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import endpoints from '../../constants/endpoints';
import get from '../../services/get';
import remove from '../../services/remove';
import Loading from '../global/Loading';
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';

const CarsTable = () => {
	const [carsList, setCarsList] = useState();

	const getCarsList = async () => {
		const result = await get(endpoints.cars);
		if (result.data) setCarsList(result.data.data);
	};
	useEffect(() => {
		getCarsList();
	}, []);

	const handleDelete = async (id, name) => {
		if (window.confirm(name + ' حذف شود؟')) {
			const result = await remove(endpoints.cars + '/' + id);
			console.log(result);
			if (result.data) {
				getCarsList();
			}
		}
	};

	const actionCelElement = (item) => {
		return (
			<div className='flex text-black'>
				<Link to={'/cars/detail?id=' + item.id} className='mx-1'>
					<EyeOutlined style={{ color: 'black' }} />
				</Link>
				<Link to={'/cars/edit?id=' + item.id} className='mx-1'>
					<EditOutlined style={{ color: 'black' }} />
				</Link>
				<div onClick={() => handleDelete(item.id, item.tip)} className='mx-1'>
					<DeleteOutlined style={{ color: 'black' }} />
				</div>
			</div>
		);
	};

	const columns = [
		{
			title: '',
			dataIndex: '',
			key: '',
			render: actionCelElement,
		},
		{
			title: 'tipID',
			dataIndex: 'tipID',
			key: 'tipID',
		},
		{
			title: 'tip',
			dataIndex: 'tip',
			key: 'tip',
		},
		{
			title: 'systemID',
			dataIndex: 'systemID',
			key: 'systemID',
		},
		{
			title: 'brandID',
			dataIndex: 'brandID',
			key: 'brandID',
		},
		{
			title: 'brand',
			dataIndex: 'brand',
			key: 'brand',
		},
		{
			title: 'zarfiat',
			dataIndex: 'zarfiat',
			key: 'zarfiat',
		},
	];

	if (!carsList) return <Loading />;

	return (
		<Table
			rowClassName='cursor-pointer'
			dataSource={carsList}
			columns={columns}
			bordered
		/>
	);
};

export default CarsTable;
