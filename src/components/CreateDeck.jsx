import { useState } from 'react';
// import axios from 'axios';

function CreateDeck() {
    const [deckTitle, setDeckTitle] = useState('');
    const [deckDescription, setDeckDescription] = useState('');
    const [flashcards, setFlashcards] = useState([]);
    const [currentFlashcard, setCurrentFlashcard] = useState({ question: '', answer: '', tags: '', dueDate: null });
    const [editIndex, setEditIndex] = useState(null);

    const addFlashcard = () => {
        if (!currentFlashcard.question.trim() || !currentFlashcard.answer.trim()) {
            alert('Both question and answer are required.');
            return;
        }
        if (editIndex !== null) {
            const updatedFlashcards = flashcards.map((card, i) =>
                i === editIndex ? currentFlashcard : card
            );
            setFlashcards(updatedFlashcards);
            setEditIndex(null);
        } else {
            setFlashcards([...flashcards, currentFlashcard]);
        }
        setCurrentFlashcard({ question: '', answer: '', tags: '', dueDate: null });
    };

    const editFlashcard = (index) => {
        setCurrentFlashcard(flashcards[index]);
        setEditIndex(index);
    };

    const deleteFlashcard = (index) => {
        const updatedFlashcards = flashcards.filter((_, i) => i !== index);
        setFlashcards(updatedFlashcards);
    };

    const saveDeck = async () => {
        if (!deckTitle || flashcards.length === 0) {
            alert('Deck title and at least one flashcard are required.');
            return;
        }
        const newDeck = { title: deckTitle, description: deckDescription, cards: flashcards };
        try {
            await axios.post('https://api.yourserver.com/decks', newDeck); // Replace with actual backend URL
            alert('Deck saved successfully');
        } catch (error) {
            console.error('Error saving deck:', error);
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/beautiful-sky-river-with-floor_1112-1127.jpg?w=1380&t=st=1727510621~exp=1727511221~hmac=af2510f8703efbb54cfc06e6df98dd4681624ffe68d306ffa61ff012a593f6ff)' }}
        >
            <div className="flex flex-col p-6 shadow-lg rounded-lg w-full md:w-2/3 lg:w-1/2 mx-auto mt-10 bg-white bg-opacity-10">
                <h2 className="text-2xl font-mono text-center mb-6 text-gray-700">Create New Deck</h2>

                <input
                    type="text"
                    placeholder="Enter Deck Title"
                    value={deckTitle}
                    onChange={(e) => setDeckTitle(e.target.value)}
                    className="border border-gray-300 p-3 rounded-md mb-4 font-mono focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                    aria-label="Deck Title"
                />

                <textarea
                    placeholder="Enter Deck Description"
                    value={deckDescription}
                    onChange={(e) => setDeckDescription(e.target.value)}
                    className="border border-gray-300 p-3 font-mono rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-10"
                    aria-label="Deck Description"
                />

                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Enter Question"
                        value={currentFlashcard.question}
                        onChange={(e) => setCurrentFlashcard({ ...currentFlashcard, question: e.target.value })}
                        className="flex-1 border font-mono border-gray-300 p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                        aria-label="Flashcard Question"
                    />
                    <input
                        type="text"
                        placeholder="Enter Answer"
                        value={currentFlashcard.answer}
                        onChange={(e) => setCurrentFlashcard({ ...currentFlashcard, answer: e.target.value })}
                        className="flex-1 border font-mono border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                        aria-label="Flashcard Answer"
                    />
                </div>

                <input
                    type="text"
                    placeholder="Tags (comma separated)"
                    value={currentFlashcard.tags}
                    onChange={(e) => setCurrentFlashcard({ ...currentFlashcard, tags: e.target.value })}
                    className="border border-gray-300 p-3 font-mono rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Flashcard Tags"
                />

                <button
                    onClick={addFlashcard}
                    className="bg-blue-500 font-mono text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-all"
                >
                    {editIndex !== null ? 'Update Flashcard' : 'Add Flashcard'}
                </button>

                <div className="mt-4">
                    {flashcards.length > 0 && (
                        <h3 className="text-xl font-mono text-gray-600 mb-2">Flashcards Preview:</h3>
                    )}
                    <div className="space-y-4">
                        {flashcards.map((flashcard, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 p-4 rounded-md shadow-sm bg-white"
                            >
                                <p className="font-mono text-gray-700">Q: {flashcard.question}</p>
                                <p className="text-gray-600 mt-1">A: {flashcard.answer}</p>
                                {flashcard.tags && <p className="text-sm text-gray-500 mt-1">Tags: {flashcard.tags}</p>}
                                <div className="flex space-x-4 mt-2">
                                    <button
                                        onClick={() => editFlashcard(index)}
                                        className="text-blue-300 font-mono hover:text-blue-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteFlashcard(index)}
                                        className="text-red-300 font-mono hover:text-gray-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={saveDeck}
                    className="bg-green-500 font-mono text-white py-3 mt-6 rounded-md hover:bg-green-600 transition-all"
                >
                    Save Deck
                </button>
            </div>
        </div>
    );
}

export default CreateDeck;
