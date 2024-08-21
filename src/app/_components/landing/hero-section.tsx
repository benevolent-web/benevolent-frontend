"use client";
import React, { useState, useEffect } from 'react';
import { Button } from "~/components/ui/button";

const HeroSection = () => {
  const phrases = ["Web3 Integration", "Interactive App", "Server Architecture"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsAnimating(false);
      }, 500); // Half of the transition duration
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          {/* Left side: Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="md:text-6xl font-bold mb-4 text-3xl">
              Let us build your{' '}
              <span className="inline-block ">
                <span
                  key={currentPhraseIndex}
                  className={`inline-block transition-all duration-500 ${isAnimating
                    ? 'opacity-0 -translate-x-10'
                    : 'opacity-100 translate-x-0'
                    }`}
                >
                  {phrases[currentPhraseIndex]}
                </span>
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-6">Empowering your vision with cutting-edge solutions and expertise.</p>
            <Button size="lg">Get Started</Button>
          </div>
          {/* Right side: Image */}
          <div className="md:w-1/2">
            <img
              src="/benevolent-transparent.png"
              alt="Hero"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;