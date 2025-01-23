import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const { pathname } = useLocation();

	const handleLinkClick = (targetPath) => {
		if (pathname === targetPath) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	const handleScroll = () => {
		setIsScrolled(window.scrollY > 10);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const menuItems = [
		{ name: 'About', to: '/about' },
		{ name: 'Projects', to: '/projects' },
		{ name: 'Contact', to: '/contact' },
	];

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
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
					<Link
						to="/"
						onClick={() => handleLinkClick('/')}
						className="text-2xl font-bold text-blue-600"
					>
						semicolon
					</Link>

					{/* Menu Links (Desktop) */}
					<div className="hidden md:flex space-x-6">
						{menuItems.map((item) => (
							<Link
								key={item.to}
								to={item.to}
								onClick={() => handleLinkClick(item.to)}
								className="text-lg text-gray-700 hover:text-blue-600"
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
								{isMenuOpen ? (
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
			{isMenuOpen && (
				<div className="md:hidden bg-gray-100">
					<div className="space-y-1 px-2 pt-2 pb-3">
						{menuItems.map((item) => (
							<Link
								key={item.to}
								to={item.to}
								onClick={() => {
									handleLinkClick(item.to);
									setIsMenuOpen(false);
								}}
								className="block px-4 py-2 text-lg text-gray-700 hover:text-blue-600"
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
