"use client";
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Button } from "~/components/ui/button";
import Link from 'next/link';

gsap.registerPlugin(TextPlugin);

const HeroSection: React.FC = () => {
  const phrases = ["Web3 Integration", "Interactive App", "Server Architecture"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phraseRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Timeline for initial animations
    const initialTl = gsap.timeline();

    // Animate content
    initialTl.fromTo(contentRef.current,
      { opacity: 0, y: 50 },
      { duration: 1, opacity: 1, y: 0, ease: "power3.out" }
    );

    // Animate image
    initialTl.fromTo(imageRef.current,
      { opacity: 0, x: 50 },
      { duration: 1, opacity: 1, x: 0, ease: "power3.out" },
      "-=0.5" // Start slightly before the content animation finishes
    );

    // Timeline for phrase animations
    const phraseTl = gsap.timeline({ repeat: -1, repeatDelay: 0.15 });

    phrases.forEach((phrase, index) => {
      phraseTl
        .add(() => setCurrentPhraseIndex(index))
        // Fade in from left
        .from(phraseRef.current, {
          duration: 0.25,
          opacity: 0,
          x: -30,
          onComplete: () => setCurrentPhraseIndex(index)
        })
        .to(phraseRef.current, {
          duration: 0.5,
          opacity: 1,
          x: 0
        })
        // Pause
        .to(phraseRef.current, {
          duration: 1.5, // Adjust this value to change the pause duration
          opacity: 1,
          x: 0
        })
        // Fade out to right
        .to(phraseRef.current, {
          duration: 0.1,
          opacity: 0,
          x: 100
        });
    });

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.to([contentRef.current, imageRef.current], { duration: 0.5, opacity: 1, ease: "power1.out" });
      return;
    }

    // Set up coordinate mapping
    let mapX: (n: number) => number;
    let mapY: (n: number) => number;

    function setMaps() {
      mapX = gsap.utils.mapRange(0, window.innerWidth, -10, 10);
      mapY = gsap.utils.mapRange(0, window.innerHeight, -10, 10);
    }

    setMaps();
    window.addEventListener('resize', setMaps);

    // 3D wobble effect with GSAP coordinate mapping
    let wobbleRequest: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(wobbleRequest);
      wobbleRequest = requestAnimationFrame(() => {
        if (imageRef.current && mapX && mapY) {
          const rotateY = mapX(e.clientX);
          const rotateX = -mapY(e.clientY); // Invert Y-axis for natural tilt
          gsap.to(imageRef.current, {
            rotationY: rotateY,
            rotationX: rotateX,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      initialTl.kill();
      phraseTl.kill();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', setMaps);
      cancelAnimationFrame(wobbleRequest);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          {/* Left side: Content */}
          <div ref={contentRef} className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="md:text-6xl font-bold mb-4 text-3xl">
              Let us build your{' '}
              <span ref={phraseRef} className="inline-block">
                {phrases[currentPhraseIndex]}
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-muted-foreground">Empowering your vision with cutting-edge solutions and expertise.</p>
            <Button size="lg" className="mr-4">Get Started</Button>
            <Button size="lg" asChild><Link href={'/portfolio'}>See Our Work</Link></Button>
          </div>
          {/* Right side: Image */}
          <div ref={imageContainerRef} className="md:w-1/2 perspective-1000">
            <img
              ref={imageRef}
              // TODO: Add a better image
              src="/images/Blockchain--Streamline-Lagos.png"
              alt="Hero"
              className="rounded-lg w-full h-auto transform-style-3d"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;