import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="bg-gray-500 p-4 text-white flex justify-between items-center">
            <h1 className="text-3xl font-mono">Newton Flashcard</h1>
            <div className="flex space-x-4">
                {/* <NavLink to="/" className="text-lg font-mono hover:underline cursor-pointer">
                    Header
                </NavLink> */}
                <NavLink to="/login" className="text-lg font-mono hover:text cursor-pointer">
                    Login
                </NavLink>
                <NavLink to="/signup" className="text-lg font-mono hover:underline cursor-pointer">
                    Sign Up
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
