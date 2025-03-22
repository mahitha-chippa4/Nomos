import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
          Legal Assistance, <span className="text-indigo-600">Simplified</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Your AI-powered legal companion. Get instant answers to your legal questions,
          24/7 assistance, and expert guidance at your fingertips.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chat">
          <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            Start chat now  →
          </button>
            </Link>
          <button className="bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold border border-slate-200 hover:bg-slate-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}