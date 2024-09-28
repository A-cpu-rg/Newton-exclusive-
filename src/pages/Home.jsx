import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <main
            className="flex items-center justify-center min-h-screen bg-gray-10"
            style={{
                backgroundImage: `url('https://www.schoolplanner.co.uk/wp-content/uploads/2020/01/page-colours-flashcard.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <section className=" p-8 rounded-lg text-center shadow-lg">
                <h1 className="text-5xl font-mono mb-4">Elevate Your Learning!</h1>
                <p className="text-lg font-mono mb-4 italic">"The beautiful thing about learning is that no one can take it away from you." - B.B. King</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="p-4 bg-blue-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-xl font-mono mb-2">Suggested Topics</h2>
                        <ul>
                            <li className='font-mono'>Mathematics</li>
                            <li className='font-mono'>Science</li>
                            <li className='font-mono'>History</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-green-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-xl font-mono mb-2">Recent Decks</h2>
                        <ul>
                            <li className='font-mono'>JavaScript Basics</li>
                            <li className='font-mono'>React Fundamentals</li>
                            <li className='font-mono'>CSS Tricks</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-yellow-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-xl font-mono mb-2">Quick Tips</h2>
                        <ul>
                            <li className='font-mono'>Review regularly</li>
                            <li className='font-mono'>Use visuals for memory</li>
                            <li className='font-mono'>Practice with quizzes</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center space-x-4">
                    <NavLink
                        to="/create-deck"
                        className="bg-blue-600 text-white font-mono px-4 py-2 rounded-md transition-transform duration-300 transform hover:scale-105"
                    >
                        Create Deck
                    </NavLink>
                    <NavLink
                        to="/review-deck"
                        className="bg-green-600 text-white font-mono px-4 py-2 rounded-md transition-transform duration-300 transform hover:scale-105"
                    >
                        Review Deck
                    </NavLink>
                </div>
            </section>
        </main>
    );
};

export default Home;
