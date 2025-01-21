import React from 'react';

const About = () => {
	return (
		<div className="min-h-screen bg-white text-gray-900">
			{/* Hero Section */}
			<section className="flex flex-wrap items-center justify-center py-20">
				<div className="w-full px-5 sm:px-14 max-w-4xl text-center">
					<h1 className="mt-8 text-2xl font-semibold">
						About{' '}
						<span className="block text-6xl font-bold text-blue-600 mt-1">Me</span>
					</h1>
					<p className="mt-6 text-xl font-normal text-gray-600">
						Hi, I'm Halim, a passionate developer dedicated to crafting seamless
						digital experiences. My journey in web development has been fueled by
						curiosity and the drive to transform ideas into impactful solutions.
					</p>
				</div>
			</section>

			{/* Details Section */}
			<section className="py-20 px-5 sm:px-10 lg:px-32">
				<h2 className="text-4xl font-bold text-center mb-10">Details</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
					{/* Vision */}
					<div className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
						<h3 className="text-2xl font-bold text-blue-600 mb-3">Vision</h3>
						<p className="text-lg text-gray-700 leading-relaxed">
							To create user-friendly and aesthetically pleasing websites that
							connect people with technology in meaningful ways.
						</p>
					</div>

					{/* Mission */}
					<div className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
						<h3 className="text-2xl font-bold text-blue-600 mb-3">Mission</h3>
						<p className="text-lg text-gray-700 leading-relaxed">
							My mission is to continuously learn and apply the latest technologies
							to develop innovative solutions, while prioritizing simplicity,
							accessibility, and performance in every project.
						</p>
					</div>
				</div>
			</section>

			{/* Fun Fact Section */}
			<section className="py-20 px-5 sm:px-10 lg:px-32 bg-gray-50">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-4xl font-bold text-blue-600 mb-6">Fun Fact</h2>
					<p className="text-lg text-gray-700">
						I’m a firm believer in the power of <strong>“semicolon”</strong>—both as
						a punctuation mark and a symbol of continuity and innovation.
					</p>
				</div>
			</section>
		</div>
	);
};

export default About;
