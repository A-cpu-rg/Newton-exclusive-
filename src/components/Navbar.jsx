import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../firebase'; 
function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('token'); 
        if (user) {
            setIsAuthenticated(true);
        }
    }, []);
    
    const handleLogout = async () => {
        try {
            await signOut(auth); 
            localStorage.removeItem('token'); 
            setIsAuthenticated(false);
            navigate("/login"); 
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div className="bg-gray-500 p-4 text-white flex justify-between items-center">
            <h1 className="text-3xl font-mono">Newton Flashcard</h1>
            <div className="flex space-x-4">
                <NavLink to="/" className="text-lg font-mono hover:underline cursor-pointer">
                    Header
                </NavLink>

                {isAuthenticated ? (
                    <button
                        onClick={handleLogout}
                        className="text-lg font-mono hover:underline cursor-pointer"
                    >
                        Logout
                    </button>
                ) : (
                    <>
                        <NavLink to="/login" className="text-lg font-mono hover:text cursor-pointer">
                            Login
                        </NavLink>
                        <NavLink to="/signup" className="text-lg font-mono hover:underline cursor-pointer">
                            Sign Up
                        </NavLink>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;
