// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-tertiary text-white py-6">
      <div className="container mx-auto text-center">
        <h3 className="text-xl mb-4 animate-fadeIn">Connect with Me</h3>
        <ul className="flex justify-center space-x-6 mb-4">
          <li>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
              🐦
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kanchan-gobari-6173b0247/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
              💼
            </a>
          </li>
          <li>
            <a href="https://github.com/kanchan0508" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
              🐙
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/kanchan_4959/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110 w-8">
              📸
            </a>
          </li>
        </ul>
        <p className="text-sm text-gray-400">© 2024 Ben Aiden. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
