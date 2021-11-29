import 'antd/dist/antd.less';
import { ConfigProvider } from 'antd';
import './App.css';
import WrapperLayout from './components/global/layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Desc from './components/pages/Desc';
import Cars from './components/pages/Cars';
import CarDetail from './components/cars/CarDetail';
import EditCar from './components/cars/EditCar';

function App() {
	return (
		<ConfigProvider direction='rtl'>
			<Router>
				<WrapperLayout>
					<Switch>
						<Route exact path='/cars'>
							<Cars />
						</Route>
						<Route exact path='/cars/detail'>
							<CarDetail />
						</Route>
						<Route exact path='/cars/edit'>
							<EditCar />
						</Route>
						<Route path='/'>
							<Desc />
						</Route>
					</Switch>
				</WrapperLayout>
			</Router>
		</ConfigProvider>
	);
}

export default App;
