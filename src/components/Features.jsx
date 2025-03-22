import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: '🤖',
    title: '24/7 Availability',
    description: 'Get instant legal guidance anytime, anywhere. Our AI never sleeps.',
  },
  {
    icon: '🛡️',
    title: 'Secure & Confidential',
    description: 'Your data is encrypted and protected. Privacy is our top priority.',
  },
  {
    icon: '✨',
    title: 'Smart Analysis',
    description: 'Advanced AI technology provides accurate and relevant legal information.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}