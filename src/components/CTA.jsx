import React from 'react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="bg-indigo-600 py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <Link to="/chat">
        <div className="inline-flex items-center bg-white/10 px-4 py-2 rounded-full text-white mb-8">
          💬 Start chatting instantly
        </div>
        </Link>
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Transform Your Legal Work?
        </h2>
        <p className="text-indigo-100 text-lg mb-8">
          Join thousands of professionals who trust Nomos for their legal research and guidance.
        </p>
        <Link to="/chat">
        <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
          Get Started Now
        </button>
        </Link>
      </div>
    </section>
  );
}