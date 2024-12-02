'use client';
import React from 'react';
import Image from 'next/image';
import Logo from './logo.png';

const currentYear = new Date().getFullYear();

const menuItems = ["Products", "Black Friday", "About"];

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-r from-gray-800 via-black to-gray-900 text-white py-8">
      <div className="mx-auto w-full max-w-7xl px-8">
        {/* Footer Content */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Left Menu */}
          <div className="flex space-x-6">
            {menuItems.slice(0, 1).map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex justify-center">
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={100}
              className="hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Right Menu */}
          <div className="flex space-x-6">
            {menuItems.slice(1, menuItems.length).map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400">
          <p>
            © {currentYear} Ecstasystores. All rights reserved.
          </p>
          <p className="mt-2">
            Made with ❤️ by <a href="https://lovense.com" className="hover:text-gray-200">Lovense Team</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
