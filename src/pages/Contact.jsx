import React, { useState } from 'react';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form Data Submitted:', formData);
		setSubmitted(true);
		// Reset form
		setFormData({
			name: '',
			email: '',
			message: '',
		});
	};
	return (
		<div className="min-h-screen bg-white text-gray-900 flex justify-center p-5">
			<div className="max-w-lg w-full px-8">
				<h1 className="text-4xl font-bold text-center mb-6">Contact</h1>

				{submitted ? (
					<div className="text-center">
						<p className="text-lg text-gray-700">
							Thank you for reaching out! I will get back to you soon.
						</p>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Your Name"
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Your Email"
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-gray-700"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
								rows="4"
								className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Your Message"
							/>
						</div>
						<button
							type="submit"
							className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
						>
							Send Message
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default Contact;
