import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import routes from './routes';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Navbar />
			<Routes>
				{routes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
