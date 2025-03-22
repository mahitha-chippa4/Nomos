import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Logo />
          <div className="text-sm">
            © 2024 Nomos AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}