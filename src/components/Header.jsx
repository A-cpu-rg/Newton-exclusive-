import React from "react";
import { useNavigate } from 'react-router-dom'; 

function Header() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/login'); 
    };

    return (
        <div
            className="min-h-screen flex flex-col"
            style={{
                backgroundImage: 'url("https://c1.wallpaperflare.com/preview/542/354/434/flashcards-cards-paper.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <header className="bg-slate-10 bg-opacity-80 text-white flex-grow flex flex-col justify-center items-center py-8 px-4 text-center">
                <h1 className="text-4xl font-mono mb-4">
                    Welcome to Newton Flashcards!
                </h1>
                <p className="text-lg font-mono mb-6">
                    Boost your learning with interactive flashcards. Ready to get started?
                </p>
                <button
                    className="bg-white text-blue-600 font-mono py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300"
                    onClick={handleGetStarted}
                >
                    Get Started
                </button>
            </header>

            <footer className="bg-gray-100 py-6">
                <div className="container mx-auto text-center">
                    <ul className="flex justify-center space-x-8">
                        <li>
                            <a href="/about-us" className="text-gray-600 font-mono hover:text-blue-600">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/contact-us" className="text-gray-600 font-mono hover:text-blue-600">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="/privacy-policy" className="text-gray-600 font-mono hover:text-blue-600">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/terms" className="text-gray-600 font-mono hover:text-blue-600">
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Header;
