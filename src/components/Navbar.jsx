import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	// Detecting scroll to add blur effect
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav
			className={`bg-white ${
				isScrolled ? 'bg-opacity-10 backdrop-blur-lg' : 'bg-opacity-100'
			} sticky top-0 z-50 transition-all duration-300`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-36">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<Link to="/" className="text-2xl font-bold text-blue-600">
						semicolon
					</Link>

					{/* Menu Links (Desktop) */}
					<div className="hidden md:flex space-x-6">
						{[
							{ name: 'Home', to: '/' },
							{ name: 'About', to: '/about' },
							{ name: 'Projects', to: '/projects' },
							{ name: 'Contact', to: '/contact' },
						].map((item) => (
							<Link
								key={item.name}
								to={item.to}
								className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
							>
								{item.name}
							</Link>
						))}
					</div>

					{/* Hamburger Menu Button (Mobile) */}
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							className="text-gray-700 hover:text-blue-600 focus:outline-none"
						>
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Dropdown Menu (Mobile) */}
			{isOpen && (
				<div className="md:hidden bg-gray-100">
					<div className="space-y-1 px-2 pt-2 pb-3">
						{[
							{ name: 'Home', to: '/' },
							{ name: 'About', to: '/about' },
							{ name: 'Projects', to: '/projects' },
							{ name: 'Contact', to: '/contact' },
						].map((item) => (
							<Link
								key={item.name}
								to={item.to}
								className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200 hover:text-blue-600"
								onClick={() => setIsOpen(false)}
							>
								{item.name}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
