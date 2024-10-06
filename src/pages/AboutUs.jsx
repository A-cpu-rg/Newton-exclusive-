import React from 'react';

function AboutUs() {
    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover"
            style={{ backgroundImage: "url('https://img.freepik.com/free-photo/curvy-narrow-muddy-road-dark-forest-surrounded-by-greenery-little-light-coming-from_181624-1825.jpg?t=st=1727521159~exp=1727524759~hmac=70f6da074721c5d49989c43c30bb05fd371a5658d9301be83137d7a39dd61229&w=1380')" }}
        >
            <div className="flex flex-col p-2 shadow-lg rounded-lg w-full md:w-1/3 lg:w-1/4 bg-white bg-opacity-70">
                <h1 className="text-2xl font-mono font-bold text-center mb-3">About Us</h1>
                <p className="text-md font-mono text-gray-700 mb-3">
                    Welcome to Newton Flashcards, your solution for efficient learning through interactive flashcards.
                </p>
                <p className="text-md font-mono text-gray-700 mb-3">
                    Our mission is to provide a user-friendly platform that enhances your study experience.
                </p>
                <p className="text-md font-mono text-gray-700 mb-3">
                    Developed by <strong>Abhishek</strong>, we help users of all ages memorize and retain information easily.
                </p>
                <p className="text-md font-mono text-gray-700 mb-3">
                    Thank you for choosing Newton Flashcards. Let’s embark on this learning journey together!
                </p>

                <h2 className="text-xl font-mono font-bold text-center mt-4 mb-2">Connect with Me</h2>
                <p className="text-md font-mono text-center mb-3">
                    Connect on <a href="https://www.linkedin.com/in/abhishek-528a4b221" className="text-blue-500 underline">LinkedIn</a>.
                </p>

                <h2 className="text-xl font-mono font-bold text-center mt-4 mb-2">Vision</h2>
                <p className="text-md font-mono text-gray-700 mb-3">
                    Our vision is to make learning accessible and enjoyable for everyone.
                </p>

                <h2 className="text-xl font-mono font-bold text-center mt-4 mb-2">Features</h2>
                <ul className="list-disc list-inside text-md font-mono text-gray-700 mb-3">
                    <li>Interactive flashcards.</li>
                    <li>Customizable decks.</li>
                </ul>
                
                <h2 className="text-xl font-mono font-bold text-center mt-4 mb-2">Get Started!</h2>
                <p className="text-md font-mono text-gray-700 text-center mb-3">
                    Sign up today to start mastering new concepts!
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
