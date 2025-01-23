import React from 'react';

const Footer = () => {
	return (
		<footer>
			<div className="bg-gray-200 py-4 mt-2">
				<p className="text-center text-sm text-gray-600">
					&copy; {new Date().getFullYear()} Nurhalim Habibie - All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
