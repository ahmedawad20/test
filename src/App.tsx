import './styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './ui/pages/router';

function App() {
	return <RouterProvider router={router} />;
}

export default App;
