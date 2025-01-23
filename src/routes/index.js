import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const routes = [
	{ path: '/', Component: Home },
	{ path: '/about', Component: About },
	{ path: '/projects', Component: Projects },
	{ path: '/contact', Component: Contact },
];

export default routes;
