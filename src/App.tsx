import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from 'react-redux';
import { store } from './state/store';
import CellList from './components/CellList';

const App = () => {
	return (
		<Provider store={store}>
			<div>
				<CellList />
			</div>
		</Provider>
	);
};

export default App;
