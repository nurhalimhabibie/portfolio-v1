import React from 'react';
import rbt from '../assets/images/Robot.png';

const About = () => {
	return (
		<div className="min-h-screen bg-white text-gray-900 p-5">
			{/* About Section */}
			<section className="sm:px-10 lg:px-32">
				<h1 className="text-4xl font-bold mb-16 text-center">About</h1>
				<div className="flex flex-col items-center gap-5 lg:flex-row lg:items-start lg:text-justify lg:px-10 ">
					{/* Gambar */}
					<div className="flex justify-center lg:justify-end">
						<img src={rbt} alt="semibot" className="w-full max-w-full lg:max-w-md" />
					</div>

					{/* Teks */}
					<div>
						<p className="text-xl font-semibold mb-3 text-center lg:text-start">
							Nurhalim Habibie
						</p>
						<p className="text-lg font-normal text-center lg:text-start leading-relaxed">
							Hi, I'm Nurhalim Habibie, a passionate developer dedicated to crafting
							seamless digital experiences. My journey in web development has been
							fueled by curiosity and the drive to transform ideas into impactful
							solutions.
						</p>
						<div className="flex flex-wrap gap-4 mt-3 justify-center lg:justify-start">
							<a
								href="https://www.linkedin.com/in/nurhalim-habibie/"
								className="flex px-5 py-1 bg-black text-white text-base rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg"
							>
								LinkedIn
								<span>
									<img
										src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
										alt=""
										className="ms-1 mt-0.5 size-5"
									/>
								</span>
							</a>
							<a
								href="https://docs.google.com/document/d/1RTIHFTOYoEX2PjqUIUQ9x1YYmpwhX40uohOMaoQ1KtE/edit?tab=t.0"
								className="flex px-5 py-1  bg-black text-white text-base rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg"
							>
								Resume
								<span>
									<img
										src="https://img.icons8.com/?size=100&id=53682&format=png&color=000000"
										alt=""
										className="ms-1 mt-1 size-4"
									/>
								</span>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Details Section */}
			<section className="py-20 px-5 sm:px-10 lg:px-32">
				<h2 className="text-4xl font-bold text-center mb-10">Details</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
					{/* Vision */}
					<div className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
						<h3 className="text-2xl font-bold mb-3">Vision</h3>
						<p className="text-lg text-gray-700 leading-relaxed">
							To create user-friendly and aesthetically pleasing websites that
							connect people with technology in meaningful ways.
						</p>
					</div>

					{/* Mission */}
					<div className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
						<h3 className="text-2xl font-bold mb-3">Mission</h3>
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
					<h2 className="text-4xl font-bold mb-6">Fun Fact</h2>
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
