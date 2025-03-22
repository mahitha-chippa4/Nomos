import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <Link to="/chat">
          <button className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            Chat Now →
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}