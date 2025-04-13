import React from 'react';
import { Skills } from './Sections';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-primary relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-400/10 rounded-full filter blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

        {/* Particle effects */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-secondary/50 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${4 + Math.random() * 6}s infinite ${Math.random() * 10}s ease-in-out`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-bold relative">
                My Technical Toolkit
                <div
                  className="absolute -bottom-2 left-0 h-1 bg-secondary w-full"
                />
              </h2>
              <p className="text-textSecondary mt-4 max-w-2xl mx-auto">
                Here are the technologies and tools I've been working with recently.
              </p>
            </div>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
