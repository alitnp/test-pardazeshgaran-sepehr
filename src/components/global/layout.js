import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
	MenuOutlined,
	CarOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
} from '@ant-design/icons';
import { useLocation } from 'react-router';

const { Sider, Header, Content } = Layout;

const WrapperLayout = ({ children }) => {
	const [collapse, setCollapse] = useState(false);

	const { pathname } = useLocation();

	return (
		<Layout>
			<Sider
				trigger={null}
				theme='light'
				breakpoint='lg'
				collapsedWidth='50px'
				onBreakpoint={(broken) => {
					setCollapse(broken);
				}}
				collapsed={collapse}
				style={{ minHeight: '100%' }}
			>
				<div className='logo' />
				<Menu
					mode='inline'
					defaultSelectedKeys={pathname.endsWith('cars') ? ['2'] : ['1']}
					style={{ paddingTop: '4rem', position: 'sticky', top: '0' }}
				>
					<Menu.Item
						key='1'
						icon={<MenuOutlined />}
						style={{ borderTop: '1px solid #e7e7e7', marginTop: '0' }}
					>
						<Link to='/'>توضیحات</Link>
					</Menu.Item>
					<Menu.Item key='2' icon={<CarOutlined />}>
						<Link to='/cars'>خودروها</Link>
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout className='bg-gray-50' style={{ background: '#f9fafb' }}>
				<Header
					theme='light'
					className='border-b '
					style={{
						paddingRight: '2rem',
						background: '#fff',
						height: '4rem',
						position: 'sticky',
						top: '0',
					}}
				>
					{React.createElement(
						collapse ? MenuFoldOutlined : MenuUnfoldOutlined,
						{
							className: 'trigger',
							onClick: () => setCollapse(!collapse),
						}
					)}
				</Header>
				<Content className='container max-w-5xl pt-8 mx-auto bg-gray-50'>
					{children}
				</Content>
			</Layout>
		</Layout>
	);
};

export default WrapperLayout;
