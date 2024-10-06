import React, { useState } from 'react';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // API call to send form data
            // This is where the API method is used
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST', // Specifies the HTTP method (POST) to send data
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(formData), 
            });

            const data = await response.json();

            if (data.success) {
                console.log('Form submitted successfully:', data.message);
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error('Error submitting form:', data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover"
            style={{ backgroundImage: "url('https://img.freepik.com/free-photo/curvy-narrow-muddy-road-dark-forest-surrounded-by-greenery-little-light-coming-from_181624-1825.jpg?t=st=1727521159~exp=1727524759~hmac=70f6da074721c5d49989c43c30bb05fd371a5658d9301be83137d7a39dd61229&w=1380')" }}
        >
            <div className="flex flex-col p-6 shadow-lg rounded-lg w-full md:w-1/3 lg:w-1/4 bg-white bg-opacity-10">
                <h1 className="text-3xl font-mono font-bold text-center mb-4">Contact Us</h1>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label className="text-lg font-mono mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mb-4 p-2 border border-gray-300 rounded"
                    />

                    <label className="text-lg font-mono mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mb-4 p-2 border border-gray-300 rounded"
                    />

                    <label className="text-lg font-mono mb-2">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mb-4 p-2 border border-gray-300 rounded"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
