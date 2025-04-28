import React from 'react';
import ldgpage from '../assets/images/Landingpage.png';
import roti from '../assets/images/Roti.png';
import ecom from '../assets/images/ecom.png';

const projects = [
	{
		title: 'StoreID',
		image: ecom,
		description:
			'A full-stack e-commerce platform with user authentication, payment integration, and a product management system.',
		techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
		link: 'https://eduwork-client.vercel.app/',
	},
	{
		title: 'Qwords Clone',
		image: ldgpage,
		description:
			'A web hosting platform that provides storage, security, and server resources to keep websites online.',
		techStack: ['Laravel'],
		link: 'https://landingpage-qwords.vercel.app/',
	},
	{
		title: 'Bakery Website',
		image: roti,
		description:
			'A simple platform makes it easier for bakeries in the process of marketing products and updating products online.',
		techStack: ['PHP', 'HTML', 'CSS'],
		link: 'https://blog-example.com',
	},
];

const techIcons = {
	React: 'https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png',
	'Node.js': 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png',
	Express: 'https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png',
	MongoDB: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png',
	TailwindCSS: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png',
	Laravel: 'https://img.icons8.com/?size=100&id=114956&format=png&color=000000',
	PHP: 'https://img.icons8.com/?size=100&id=ylXrZF2zxsFE&format=png&color=000000',
	HTML: 'https://img.icons8.com/?size=100&id=20909&format=png',
	CSS: 'https://img.icons8.com/?size=100&id=21278&format=png',
	WordPress: 'https://img.icons8.com/?size=100&id=12472&format=png&color=000000',
};

const Projects = () => {
	return (
		<div className="min-h-screen bg-white text-gray-900 p-5">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
						>
							{/* Gambar Proyek */}
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-40 object-cover"
							/>

							{/* Konten Proyek */}
							<div className="p-5">
								<h2 className="text-xl font-semibold">{project.title}</h2>
								<p className="text-gray-700 mt-3">{project.description}</p>

								{/* Ikon Tech Stack */}
								<div className="flex flex-wrap gap-2 mt-4">
									{project.techStack.map((tech, idx) => (
										<img
											key={idx}
											src={techIcons[tech]}
											alt={tech}
											className="w-8 h-8"
											title={tech}
										/>
									))}
								</div>

								{/* Tautan */}
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="block mt-4 hover:text-blue-700 font-medium"
								>
									View Project &rarr;
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
