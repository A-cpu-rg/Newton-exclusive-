import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function ReviewDeck({ deckId }) {
    const [deck, setDeck] = useState({
        title: 'Sample Deck',
        description: 'This is a sample deck for demonstration.',
        cards: [
            { question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
            { question: 'What is the use of useState?', answer: 'A hook that allows you to add state to functional components.' },
            // Add more sample cards as needed
        ],
    });
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [progress, setProgress] = useState(0);
    const [incorrectCards, setIncorrectCards] = useState([]);
    const [sessionComplete, setSessionComplete] = useState(false);

    // Fetch the deck from the backend
    // useEffect(() => {
    //     const fetchDeck = async () => {
    //         try {
    //             const response = await axios.get(`/api/decks/${deckId}`);
    //             setDeck(response.data);
    //             setCurrentCardIndex(0);
    //             setProgress(0);
    //             setShowAnswer(false);
    //             setIncorrectCards([]);
    //             setSessionComplete(false);
    //         } catch (error) {
    //             console.error('Error fetching the deck:', error);
    //         }
    //     };

    //     fetchDeck();
    // }, [deckId]);

    // Show next card
    const nextCard = () => {
        if (currentCardIndex < deck.cards.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
            setProgress(((currentCardIndex + 1) / deck.cards.length) * 100);
            setShowAnswer(false);
        } else {
            setSessionComplete(true); // Mark session complete
        }
    };

    // Show previous card
    const prevCard = () => {
        if (currentCardIndex > 0) {
            setCurrentCardIndex(currentCardIndex - 1);
            setProgress(((currentCardIndex - 1) / deck.cards.length) * 100);
            setShowAnswer(false);
        }
    };

    // Mark current card as known
    const markAsKnown = () => {
        nextCard(); // Move to next card
    };

    // Mark current card as unknown
    const markAsUnknown = () => {
        if (!incorrectCards.includes(deck.cards[currentCardIndex])) {
            setIncorrectCards([...incorrectCards, deck.cards[currentCardIndex]]);
        }
        nextCard(); // Move to next card
    };

    // Review incorrect cards if session is complete
    const reviewIncorrectCards = () => {
        if (incorrectCards.length > 0) {
            const incorrectDeck = { ...deck, cards: incorrectCards };
            // You may want to show the incorrect cards here
            console.log('Reviewing incorrect cards:', incorrectDeck);
        }
    };

    if (!deck) {
        return <p>Loading deck...</p>; // Loading state
    }

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover"
            style={{ backgroundImage: "url('https://img.freepik.com/free-photo/mountain-front-water-italy_181624-15877.jpg?t=st=1727518705~exp=1727522305~hmac=40dfcd016f09af5ba45f738f092e8f65498f136a0aca56fcf0ebaa5464c36f5d&w=1380')" }}
        >
            <div className="flex flex-col p-8 shadow-lg rounded-lg w-full md:w-2/3 lg:w-1/2 bg-white bg-opacity-80">
                <h2 className="text-2xl font-mono text-center mb-6 text-gray-700">{deck.title}</h2>
                <p className="text-center mb-4 text-gray-500">{deck.description}</p>

                {deck.cards.length > 0 ? (
                    <>
                        {!sessionComplete ? (
                            <>
                                <div className="border border-gray-200 p-8 rounded-md bg-gray-50 shadow-sm text-center">
                                    <h3 className="font-mono text-lg text-gray-600 mb-4">Q: {deck.cards[currentCardIndex].question}</h3>
                                    {showAnswer && (
                                        <p className="font-mono text-gray-600">A: {deck.cards[currentCardIndex].answer}</p>
                                    )}
                                </div>

                                <div className="flex justify-between mt-6">
                                    <button
                                        onClick={prevCard}
                                        disabled={currentCardIndex === 0}
                                        className={`bg-blue-500 text-white py-2 px-4 rounded-md font-mono ${currentCardIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={() => setShowAnswer(!showAnswer)}
                                        className="bg-yellow-500 text-white py-2 px-6 rounded-md font-mono hover:bg-yellow-600"
                                    >
                                        {showAnswer ? 'Hide Answer' : 'Show Answer'}
                                    </button>
                                    <button
                                        onClick={nextCard}
                                        disabled={currentCardIndex === deck.cards.length - 1}
                                        className={`bg-blue-500 text-white py-2 px-4 rounded-md font-mono ${currentCardIndex === deck.cards.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                                    >
                                        Next
                                    </button>
                                </div>

                                <div className="flex justify-between mt-6">
                                    <button
                                        onClick={markAsKnown}
                                        className="bg-green-500 text-white py-2 px-4 rounded-md font-mono hover:bg-green-600"
                                    >
                                        Mark as Known
                                    </button>
                                    <button
                                        onClick={markAsUnknown}
                                        className="bg-red-500 text-white py-2 px-4 rounded-md font-mono hover:bg-red-600"
                                    >
                                        Mark as Unknown
                                    </button>
                                </div>

                                <div className="w-full bg-gray-200 rounded-full mt-4">
                                    <div
                                        className="bg-green-500 text-xs font-mono leading-none py-1 text-center text-white rounded-full"
                                        style={{ width: `${progress}%` }}
                                    >
                                        {progress.toFixed(0)}% completed
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <h3 className="text-lg text-center mt-4">Session Complete!</h3>
                                <p className="text-center mt-2">You reviewed all cards.</p>
                                <button
                                    onClick={reviewIncorrectCards}
                                    className="bg-blue-500 text-white py-2 px-4 rounded-md font-mono mt-4 hover:bg-blue-600"
                                >
                                    Review Incorrect Cards
                                </button>
                            </>
                        )}
                    </>
                ) : (
                    <p className="text-center text-gray-500">No flashcards available in this deck.</p>
                )}
            </div>
        </div>
    );
}

export default ReviewDeck;
