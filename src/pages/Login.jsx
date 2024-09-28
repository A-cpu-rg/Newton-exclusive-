import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../firebase'; 

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/home"); 
        } catch (error) {
            setError(error.message); 
            console.error(error);
        }
    };

    return (
        <main 
            className="flex items-center justify-center min-h-screen bg-cover bg-center" 
            style={{ backgroundImage: `url('https://img.freepik.com/free-vector/futuristic-background-design_23-2148503793.jpg')` }}
        >
            <section className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-mono text-center mb-4">NewtonApp</h1>
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-mono text-gray-700">Email address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email address"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-mono text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white font-mono py-2 rounded-md hover:bg-gray-700 transition duration-200">Login</button>
                </form>

                <p className="mt-4 text-medium font-mono  text-center">
                    Don't have an account?{' '}
                    <NavLink to="/signup" className="text-blue-600 font-mono hover:underline">Sign up</NavLink>
                </p>
            </section>
        </main>
    );
};

export default Login;
