import React from 'react';

const projects = [
	{
		title: 'E-commerce Platform',
		description:
			'A full-stack e-commerce platform with user authentication, payment integration, and a product management system.',
		techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
		link: 'https://ecommerce-example.com',
	},
	{
		title: 'Portfolio Website',
		description:
			'A clean and responsive portfolio website to showcase personal projects and skills.',
		techStack: ['React', 'TailwindCSS'],
		link: 'https://portfolio-example.com',
	},
	{
		title: 'Blog Platform',
		description:
			'A blog platform featuring a Markdown editor, user authentication, and comment moderation.',
		techStack: ['Next.js', 'Firebase'],
		link: 'https://blog-example.com',
	},
	{
		title: 'Task Management App',
		description:
			'A simple task management app with drag-and-drop functionality and real-time updates.',
		techStack: ['React', 'Socket.IO', 'Node.js'],
		link: 'https://taskmanager-example.com',
	},
];

const Projects = () => {
	return (
		<div className="min-h-screen bg-white text-gray-900">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
					My Projects
				</h1>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
						>
							<h2 className="text-xl font-semibold text-blue-600">
								{project.title}
							</h2>
							<p className="text-gray-700 mt-2">{project.description}</p>
							<div className="mt-4">
								<h3 className="text-sm font-semibold text-gray-600">Tech Stack:</h3>
								<ul className="flex flex-wrap gap-2 mt-2">
									{project.techStack.map((tech, idx) => (
										<li
											key={idx}
											className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
										>
											{tech}
										</li>
									))}
								</ul>
							</div>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="block mt-4 text-blue-500 hover:text-blue-700 font-medium"
							>
								View Project &rarr;
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
