import React from 'react';
import profil from '../assets/images/profil.jpg';
import git from '../assets/images/github.png';
import post from '../assets/images/postman-color.svg';

const About = () => {
	return (
		<div className="min-h-screen bg-white text-gray-900 p-5">
			{/* About Section */}
			<section className="pb-10 sm:px-10 lg:px-32">
				<h1 className="text-4xl font-bold mb-5 text-center">About</h1>
				<div className="flex flex-col items-center gap-5 lg:flex-row lg:items-start lg:text-justify px-3 lg:px-10 ">
					{/* Gambar */}
					<div className="flex justify-center lg:justify-end">
						<div className="relative w-full max-w-full lg:max-w-md rounded-full overflow-hidden shadow-lg">
							<img src={profil} alt="semibot" className="w-full h-auto" />
						</div>
					</div>

					{/* Teks */}
					<div>
						<p className="text-xl font-semibold mb-2 text-start lg:text-start">
							Nurhalim Habibie
						</p>
						<p className="text-lg font-normal text-justify lg:text-start leading-relaxed">
							Hi, my name is Nurhalim Habibie, a passionate developer dedicated to
							crafting seamless digital experiences. My journey in web development
							has been fueled by curiosity and the drive to transform ideas into
							impactful solutions.
						</p>
						<div className="flex flex-wrap gap-4 mt-3 justify-start lg:justify-start">
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

			{/* Skills Section */}
			<section className="py-20 sm:px-10 lg:px-32">
				<h1 className="text-4xl font-bold mb-16 text-center">Skills</h1>
				<div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
					{[
						{
							name: 'HTML',
							src: 'https://img.icons8.com/?size=100&id=20909&format=png',
						},
						{
							name: 'CSS',
							src: 'https://img.icons8.com/?size=100&id=21278&format=png',
						},
						{
							name: 'JavaScript',
							src: 'https://img.icons8.com/?size=100&id=108784&format=png',
						},
						{
							name: 'Bootstrap',
							src: 'https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png',
						},
						{
							name: 'React',
							src: 'https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png',
						},
						{
							name: 'Node.js',
							src: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png',
						},
						{
							name: 'Express',
							src: 'https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png',
						},
						{
							name: 'MongoDB',
							src: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png',
						},
						{
							name: 'Tailwind',
							src: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png',
						},
						{ name: 'Postman', src: post },
						{ name: 'GitHub', src: git },
					].map((skill) => (
						<div key={skill.name} className="flex flex-col items-center">
							<img src={skill.src} alt={skill.name} className="w-12 h-12" />
							<p className="text-xl">{skill.name}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default About;
