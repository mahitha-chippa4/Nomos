import React from 'react';



export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-slate-50 p-8 rounded-2xl transition-all hover:transform hover:-translate-y-1 hover:bg-slate-100">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}