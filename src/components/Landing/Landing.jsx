import React from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import Features from '../Features';
import CTA from '../CTA';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 w-full ">
      <Navbar />
      <main >
        <Hero />
        <Features />
        <CTA />
      </main>
      
    </div>
  );
}

export default App;