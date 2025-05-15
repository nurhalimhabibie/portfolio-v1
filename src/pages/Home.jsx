import React from 'react';
import mtsn from '../assets/images/LOGO-MTSN-1.png';

const Home = () => {
	return (
		<div className="min-h-screen bg-white text-gray-900">
			{/* Hero Section */}
			<section className="flex flex-wrap items-center justify-center py-20">
				<div className="w-full px-5 sm:px-14 max-w-4xl text-center">
					<h1 className="text-2xl font-semibold">
						Hi there! Welcome to{' '}
						<span className="block text-6xl font-bold text-blue-600 mt-1">
							Semicolon
						</span>
					</h1>
					<h2 className="mt-6 text-2xl font-normal">Web Developer</h2>
					<p className="mt-6 text-xl font-normal text-gray-600">
						Transform your ideas into stunning websites, where creativity and
						functionality unite for a powerful digital presence.
					</p>
					<div className="mt-8">
						<a
							href="/contact"
							className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition-colors duration-300"
						>
							Get in touch
						</a>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-20 px-5 sm:px-10 lg:px-32">
				<h1 className="text-4xl font-bold text-center mb-16">My Services</h1>
				<div className="space-y-16 max-w-4xl mx-auto">
					{/* DESIGN */}
					<div>
						<h3 className="text-2xl font-semibold mb-3">Design</h3>
						<p className="text-lg border-b border-gray-600 text-gray-700 pb-4">
							I specialize in crafting clean and modern user interfaces that not only
							look great but also offer excellent user experience. Through wireframes
							and interactive prototypes, I help bring ideas to life and ensure every
							design decision is purposeful and user-centered.
						</p>
					</div>

					{/* DEVELOPMENT */}
					<div>
						<h3 className="text-2xl font-semibold mb-3">Development</h3>
						<p className="text-lg border-b border-gray-600 text-gray-700 pb-4">
							I build fast, responsive, and accessible websites using modern
							technologies like React, Tailwind CSS, and Node.js. My development
							process focuses on performance, scalability, and clean architecture to
							ensure long-term maintainability.
						</p>
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section className="py-20 px-5 sm:px-10 lg:px-32">
				<h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
					Experience
				</h2>
				<div className="flex sm:justify-center gap-5 overflow-x-auto no-scrollbar sm:overflow-visible">
					{/* Card 1 */}
					<div className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex-shrink-0 w-80">
						<h3 className="text-2xl font-bold">Software Engineer</h3>
						<p className="text-xl font-bold mb-2">
							<span className="text-blue-800">Eduwork</span> | Intern
						</p>
						<div className="flex gap-2 mb-2">
							{[
								'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png',
								'https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png',
								'https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png',
								'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png',
							].map((src, index) => (
								<img key={index} src={src} alt="" className="w-7 h-7" />
							))}
						</div>
						<p className="text-base text-gray-500">Aug 2023 - Jul 2024</p>
						<p className="text-lg text-gray-700">
							Developed a robust platform using the MERN stack with user
							authentication, payment gateways, and product management.
						</p>
					</div>

					{/* Card 2 */}
					<div className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex-shrink-0 w-80">
						<h3 className="text-2xl font-bold">Lab Assistant</h3>
						<p className="text-xl font-bold mb-2">
							<span className="text-blue-800">MTsN 1 Banda Aceh</span> | Intern
						</p>
						<div className="flex gap-2 mb-2">
							<img src={mtsn} alt="" className="w-7 h-7" />
						</div>
						<p className="text-base text-gray-500">Oct 2021 - Dec 2021</p>
						<p className="text-lg text-gray-700">
							Guided students in mastering computer networking basics, including
							hardware configuration and troubleshooting.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
