import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
                <ul className="flex space-x-4">
                    <li>Home</li>
                    <li>services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;